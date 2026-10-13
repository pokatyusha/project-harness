[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$failures = [System.Collections.Generic.List[string]]::new()

$requiredFiles = @(
    'AGENTS.md', 'state.md', 'registry.md', 'decisions.md', 'risks.md',
    'metrics.md', 'tokens.md', 'templates/weekly-plan.md', 'templates/task.md',
    'templates/decision.md', 'templates/interview-notes.md', 'workflows/pm.md',
    'workflows/direction-2.5.md', 'workflows/video.md', 'workflows/presentations.md',
    'workflows/pilot-users.md', 'workflows/worktree.md', 'templates/parallel-task.md'
)

foreach ($path in $requiredFiles) {
    if (-not (Test-Path -LiteralPath (Join-Path $root $path) -PathType Leaf)) {
        $failures.Add("Missing required file: $path")
    }
}

$textFiles = Get-ChildItem -LiteralPath $root -Recurse -File -Include '*.md', '*.ps1'
$secretPattern = '(?im)\b(api[_-]?key|secret|password|token)\b\s*[:=]\s*(?!TBD\b|$)\S+'
foreach ($file in $textFiles) {
    $content = Get-Content -LiteralPath $file.FullName -Raw
    if ($content -match $secretPattern -or $content -match '(?im)-----BEGIN [A-Z ]*PRIVATE KEY-----') {
        $relative = $file.FullName.Substring($root.Length).TrimStart('\', '/')
        $failures.Add("Possible secret in: $relative")
    }
}

git -C $root diff --check
if ($LASTEXITCODE -ne 0) {
    $failures.Add('git diff --check failed')
}

if ($failures.Count -gt 0) {
    $failures | ForEach-Object { Write-Error $_ }
    Write-Host "FAIL: harness verification found $($failures.Count) problem(s)."
    exit 1
}

Write-Host "PASS: harness structure, secret guard, and working-tree formatting are valid."
