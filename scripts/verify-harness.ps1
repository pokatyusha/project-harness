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
    'workflows/pilot-users.md', 'workflows/worktree.md', 'templates/parallel-task.md',
    'templates/skill-canvas.md', 'templates/project-context-card.md',
    'orchestrator/projects.toml', 'orchestrator/context-index.md',
    'orchestrator/interaction.md', 'orchestrator/plugin-routing.md', 'openspec/config.yaml',
    'orchestrator/skill-map.md', 'templates/desk-research.md', 'templates/pilot-segment-jtbd.md',
    'templates/spec-readiness.md', '.agents/skills/pilot-desk-research/SKILL.md',
    '.agents/skills/pilot-segmentation-jtbd/SKILL.md', '.agents/skills/direction-2-5-spec-readiness/SKILL.md',
    'templates/design-thinking-experiment.md', 'templates/journey-evidence-to-backlog.md',
    'templates/evidence-artifact-review.md', '.agents/skills/design-thinking-experiment/SKILL.md',
    '.agents/skills/journey-evidence-to-backlog/SKILL.md', '.agents/skills/evidence-artifact-review/SKILL.md',
    'templates/monetization-unit-model.md', '.agents/skills/monetization-unit-model/SKILL.md',
    'orchestrator/prompts/collect-project-context.md', 'orchestrator/prompts/resolve-context-files.md',
    '.agents/skills/project-skill-authoring/SKILL.md', '.agents/skills/multi-project-context/SKILL.md'
)

foreach ($path in $requiredFiles) {
    if (-not (Test-Path -LiteralPath (Join-Path $root $path) -PathType Leaf)) {
        $failures.Add("Missing required file: $path")
    }
}

$orchestratorConfig = Get-Content -LiteralPath (Join-Path $root 'orchestrator/projects.toml') -Raw
$configuredProjectCount = ([regex]::Matches($orchestratorConfig, '(?m)^\[projects\.project-0[1-4]\]$')).Count
if ($configuredProjectCount -ne 4) {
    $failures.Add('Orchestrator must define exactly four project slots')
}

$skillFiles = Get-ChildItem -LiteralPath (Join-Path $root '.agents/skills') -Recurse -File -Filter 'SKILL.md'
foreach ($skillFile in $skillFiles) {
    $skillContent = Get-Content -LiteralPath $skillFile.FullName -Raw
    $frontmatter = [regex]::Match($skillContent, '(?s)\A---\s*\r?\n(.*?)\r?\n---')
    if (-not $frontmatter.Success -or $frontmatter.Groups[1].Value -notmatch '(?m)^name:\s*[^\r\n]+' -or $frontmatter.Groups[1].Value -notmatch '(?m)^description:\s*[^\r\n]+') {
        $relative = $skillFile.FullName.Substring($root.Length).TrimStart('\', '/')
        $failures.Add("Invalid SKILL.md frontmatter: $relative")
        continue
    }

    $skillName = [regex]::Match($frontmatter.Groups[1].Value, '(?m)^name:\s*([^\r\n]+)').Groups[1].Value.Trim()
    $skillDescription = [regex]::Match($frontmatter.Groups[1].Value, '(?m)^description:\s*([^\r\n]+)').Groups[1].Value.Trim()
    if ($skillName -notmatch '^[a-z0-9]+(?:-[a-z0-9]+)*$' -or $skillName.Length -gt 64) {
        $relative = $skillFile.FullName.Substring($root.Length).TrimStart('\', '/')
        $failures.Add("Invalid skill name: $relative")
    }
    if ($skillDescription.Length -eq 0 -or $skillDescription.Length -gt 1024 -or $skillDescription -match '^(?i:\[TODO:)' -or $skillDescription -match '[<>]') {
        $relative = $skillFile.FullName.Substring($root.Length).TrimStart('\', '/')
        $failures.Add("Invalid skill description: $relative")
    }
    if ($skillContent -match '(?im)^\s*\[TODO:[^\r\n]*\]\s*$') {
        $relative = $skillFile.FullName.Substring($root.Length).TrimStart('\', '/')
        $failures.Add("Unfinished skill placeholder: $relative")
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
