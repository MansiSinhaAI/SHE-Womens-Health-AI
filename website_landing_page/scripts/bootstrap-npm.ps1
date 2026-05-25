$ErrorActionPreference = "Stop"

$node = "C:\Users\mansi\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
$tools = Join-Path $PSScriptRoot "..\.tools"
$npmRoot = Join-Path $tools "npm"
$npmCli = Join-Path $npmRoot "package\bin\npm-cli.js"
$archive = Join-Path $tools "npm.tgz"
$nodeBin = Split-Path -Parent $node

$env:PATH = "$nodeBin;$env:PATH"

New-Item -ItemType Directory -Force -Path $tools | Out-Null

if (!(Test-Path $npmCli)) {
  if (Test-Path $npmRoot) {
    Remove-Item -Recurse -Force -LiteralPath $npmRoot
  }

  New-Item -ItemType Directory -Force -Path $npmRoot | Out-Null
  Invoke-WebRequest -Uri "https://registry.npmjs.org/npm/-/npm-10.9.2.tgz" -OutFile $archive
  tar -xzf $archive -C $npmRoot
}

& $node $npmCli install
