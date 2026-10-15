"""Synthetic isolated fixtures only; no user runs, data, or external research."""
import hashlib
import json
import tempfile
import unittest
import zipfile
from pathlib import Path
from validate_zip import validate


class ArchiveChecks(unittest.TestCase):
    def package(self, directory, change=None):
        meta = dict(project_id="fixture", task_id="task", run_id="run", phase="prototype", build_version="v1", environment="unit-test", created_at="2026-10-15T00:00:00Z", operator_id="fixture", input_scope="synthetic", consent_status="not-applicable-fixture", result_schema_version="1", limitations=["No real research"])
        if change == "private":
            meta["contact"] = "synthetic-contact"
        data = {"result.md": b"Evidence is insufficient. Synthetic fixture only.", "sources.csv": b"source_id,title,publisher,author,published_at,accessed_at,url,claim_ids,source_type,limitations\n", "metadata.json": json.dumps(meta).encode()}
        files = [dict(filename=name, byte_size=len(body), sha256=hashlib.sha256(body).hexdigest(), media_type="text/plain", schema_version="1") for name, body in data.items()]
        if change == "hash":
            files[0]["sha256"] = "wrong"
        data["manifest.json"] = json.dumps({"schema_version": "1", "files": files}).encode()
        name = "coreteams_fixture_task_run_prototype_v1.zip" if change != "filename" else "coreteams_fixture_task_run_baseline_v1.zip"
        path = Path(directory) / name
        with zipfile.ZipFile(path, "w") as archive:
            for filename, body in data.items():
                archive.writestr(filename, body)
            if change == "extra":
                archive.writestr("../private.txt", "fixture")
        return path

    def test_insufficient_evidence_archive_is_structurally_valid(self):
        with tempfile.TemporaryDirectory() as temp:
            self.assertEqual(validate(self.package(temp))["semantic_review"], "REQUIRED")

    def test_invalid_archives_are_rejected(self):
        for change in ("private", "hash", "filename", "extra"):
            with self.subTest(change=change), tempfile.TemporaryDirectory() as temp:
                with self.assertRaises(ValueError):
                    validate(self.package(temp, change))


if __name__ == "__main__":
    unittest.main()
