"""Structural ZIP check; source truth, consent and usefulness still require review."""
import csv
import hashlib
import io
import json
import re
import sys
import zipfile
from urllib.parse import urlparse

PAYLOAD = {"result.md", "sources.csv", "metadata.json"}
SOURCE_FIELDS = {"source_id", "title", "publisher", "author", "published_at", "accessed_at", "url", "claim_ids", "source_type", "limitations"}
META_FIELDS = {"project_id", "task_id", "run_id", "phase", "build_version", "environment", "created_at", "operator_id", "input_scope", "consent_status", "result_schema_version", "limitations"}


def validate(path):
    with zipfile.ZipFile(path) as archive:
        names = archive.namelist()
        if len(names) != 4 or set(names) != PAYLOAD | {"manifest.json"}:
            raise ValueError("Archive must contain exactly four unique root files")
        if any(i.file_size > 10_000_000 for i in archive.infolist()):
            raise ValueError("Member exceeds this bounded validator's 10 MB limit")
        data = {name: archive.read(name) for name in names}
    text = {name: body.decode("utf-8") for name, body in data.items()}
    if not text["result.md"].strip():
        raise ValueError("Empty result")
    meta = json.loads(text["metadata.json"])
    if not isinstance(meta, dict) or not META_FIELDS <= meta.keys():
        raise ValueError("Missing metadata fields")
    if meta["phase"] not in {"baseline", "prototype"}:
        raise ValueError("Invalid phase")
    for field in ("project_id", "task_id", "run_id", "build_version"):
        if not isinstance(meta[field], str) or not re.fullmatch(r"[A-Za-z0-9.-]+", meta[field]):
            raise ValueError(f"Invalid safe identifier: {field}")
    expected = "coreteams_{project_id}_{task_id}_{run_id}_{phase}_{build_version}.zip".format(**meta)
    if path.name != expected:
        raise ValueError("Filename and metadata mismatch")
    if any(re.search(r"email|phone|contact|password|secret|api.?key", str(key), re.I) for key in meta):
        raise ValueError("Private/contact/secret metadata key")
    manifest = json.loads(text["manifest.json"])
    files = manifest.get("files") if isinstance(manifest, dict) else None
    if not isinstance(files, list) or len(files) != 3:
        raise ValueError("Manifest must list three payloads; no self-hash")
    by_name = {entry.get("filename"): entry for entry in files if isinstance(entry, dict)}
    if set(by_name) != PAYLOAD:
        raise ValueError("Manifest payload names mismatch")
    for name, entry in by_name.items():
        if entry.get("byte_size") != len(data[name]) or entry.get("sha256") != hashlib.sha256(data[name]).hexdigest():
            raise ValueError(f"Hash/size mismatch: {name}")
        if not entry.get("media_type") or not entry.get("schema_version"):
            raise ValueError(f"Missing manifest type/version: {name}")
    reader = csv.DictReader(io.StringIO(text["sources.csv"]))
    if reader.fieldnames is None or set(reader.fieldnames) != SOURCE_FIELDS:
        raise ValueError("Source CSV header mismatch")
    sources = {}
    for row in reader:
        sid = row.get("source_id")
        if not sid or sid in sources or None in row or any(value is None for value in row.values()):
            raise ValueError("Malformed or duplicate source row")
        address = urlparse(row["url"])
        if address.scheme not in {"http", "https"} or not address.netloc or not row["accessed_at"] or not row["title"]:
            raise ValueError(f"Source lacks URL/access date/title: {sid}")
        sources[sid] = row
    cited = set(re.findall(r"\[(S\d+)\]", text["result.md"]))
    if cited != set(sources):
        raise ValueError("Unresolved or unused source IDs")
    return {"structural_check": "PASS", "source_count": len(sources), "semantic_review": "REQUIRED", "consent_review": "REQUIRED"}


if __name__ == "__main__":
    from pathlib import Path
    try:
        print(json.dumps(validate(Path(sys.argv[1])), ensure_ascii=False))
    except (ValueError, KeyError, UnicodeError, zipfile.BadZipFile, OSError, json.JSONDecodeError) as error:
        print(f"FAIL: {error}", file=sys.stderr)
        sys.exit(1)
