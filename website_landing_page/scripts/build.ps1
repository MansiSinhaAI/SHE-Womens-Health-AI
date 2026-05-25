$ErrorActionPreference = "Stop"

$node = "C:\Users\mansi\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
$nodeBin = Split-Path -Parent $node
$next = Join-Path $PSScriptRoot "..\node_modules\next\dist\bin\next"

$env:PATH = "$nodeBin;$env:PATH"

& $node $next build
