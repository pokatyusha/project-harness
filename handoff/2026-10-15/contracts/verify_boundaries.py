"""Read-only compatibility probes against pinned, isolated source snapshots.

Exit 1 means at least one boundary is incompatible. Not live E2E; does not start
Claude, Docker, application lifespan, or a persistent database. Use clean snapshots
at the exact commits listed in README.md; results do not verify checkout identity.
"""
import argparse
import asyncio
import json
import re
import sys
from pathlib import Path


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--snapshots", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    root = args.snapshots.resolve()
    sys.path[:0] = [str(root / "gateway"), str(root / "runner/runner/src")]
    from fastapi.testclient import TestClient
    from backend.main import create_app, dispatch_websocket_message
    from backend.config import Settings
    from backend.db import Base, Database
    from backend.public_events import project_public_event_data
    from backend.repository import ACTIVE_RUN_STATUSES
    from ctrunner.gateway import hello_message, event_message
    from ctrunner.protocol import parse_command
    from ctrunner.v0 import translate, read_journal

    results = []

    def record(check, compatible, observed):
        results.append({"check": check, "compatible": compatible, "observed": observed})

    db = Database("sqlite+aiosqlite:///:memory:")
    app = create_app(database=db, settings=Settings(database_url=db.url))
    # No context manager: deliberately no lifespan/migration/executor startup.
    client = TestClient(app)
    try:
        response = client.post("/api/projects", json={"clientProjectId": "audit", "title": "Synthetic"})
        record("WEB_B_create_project_route", response.status_code in (200, 201), {"http": response.status_code})
        with client.websocket_connect("/ws") as ws:
            ws.send_json(hello_message(project_id="synthetic-project", runner_version="0.1.0", session_id=None, last_seq=0))
            reply = ws.receive_json()
        record("RUNNER_hello_to_real_gateway", reply.get("type") == "welcome", reply)

        class Socket:
            def __init__(self):
                self.messages = []

            async def send_text(self, value):
                self.messages.append(json.loads(value))

        socket = Socket()
        # Legal runner ID; gateway subscription rejects it. UUID intersection
        # still exists: this probes the full domain, not all possible IDs.
        parse_command({"id": "run-1", "kind": "message", "text": "Synthetic"})
        asyncio.run(dispatch_websocket_message(socket, json.dumps({"type": "run.subscribe", "run_id": "run-1", "after_seq": 0})))
        record("RUN_ID_domain_opaque_vs_uuid", not socket.messages, socket.messages)
        record("WAITING_FOR_INPUT_active_run", "waiting_for_input" in ACTIVE_RUN_STATUSES, sorted(ACTIVE_RUN_STATUSES))

        journal = root / "runner/runner/tests/journals/happy.events.jsonl"
        drafts = translate("synthetic-project", read_journal(journal.read_text(encoding="utf-8").splitlines()))
        for kind in ["facilitator.question", "user.answer.accepted", "artifact.created", "message.created"]:
            draft = next(d for d in drafts if d.type.value == kind)
            wire = event_message(1, draft)["event"]
            projected = project_public_event_data(wire)
            compatible = projected.get("type") == kind and projected.get("payload") == wire["payload"] and projected.get("event_id") == wire["event_id"]
            record("PUBLIC_EVENT_" + kind, compatible, {
                "producerType": kind, "consumerType": projected.get("type"),
                "payloadPreserved": projected.get("payload") == wire["payload"],
                "consumerSchemaFields": sorted(k for k in projected if k.startswith("schema")),
            })

        ddl = (root / "infra/init.sql").read_text(encoding="utf-8")
        sql_tables = set(re.findall(r"CREATE\s+TABLE\s+(\w+)", ddl, re.I))
        orm_tables = set(Base.metadata.tables)
        record("GATEWAY_ORM_vs_INFRA_DDL_tables", orm_tables <= sql_tables, {
            "missingInDDL": sorted(orm_tables - sql_tables), "extraInDDL": sorted(sql_tables - orm_tables),
        })
        required = ["conversation_id", "client_request_id", "next_event_seq"]
        # Static presence diagnostic only, not a SQL migration/parser test.
        record("RUNS_columns_on_shared_table", all(k in ddl for k in required), {
            "ormRequires": required, "sqlHas": [k for k in required if k in ddl],
        })
        summary = {
            "scope": "isolated real functions/in-process routes plus static DDL comparison; NOT live E2E",
            "compatible": all(r["compatible"] for r in results), "checks": results,
        }
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(json.dumps(summary, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        for result in results:
            label = "PASS " if result["compatible"] else "INCOMPATIBLE "
            print(label + result["check"] + " " + json.dumps(result["observed"], ensure_ascii=True))
        return 0 if summary["compatible"] else 1
    finally:
        client.close()
        asyncio.run(db.dispose())


if __name__ == "__main__":
    raise SystemExit(main())
