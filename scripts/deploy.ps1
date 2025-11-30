# === Deploy: methodica.ai (Next.js Node runtime) ===
# Run from project root:  .\scripts\deploy.ps1
# Builds the Next.js app locally, uploads the production artifacts,
# installs runtime dependencies on the server, and restarts services.

$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

# --- Fixed connection settings ---
$RemoteHost  = "51.17.175.27"
$User        = "ubuntu"
$Port        = 22
$KeyPath     = "C:\Users\user\Downloads\autoscaleai.pem"
$TargetPath  = "/var/www/methodica"
$TempPath    = "/tmp/methodica_upload"

# --- Runtime/Service settings ---
$ServiceUser        = "www-data"                   # Final owner of deployed files
$AppRestartCommand  = "sudo systemctl restart methodica-next"  # Set to actual service or leave blank
$NginxReloadCommand = "sudo systemctl reload nginx || sudo systemctl restart nginx"

# --- Local paths ---
$ScriptDir   = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent $ScriptDir
$ArtifactDir = Join-Path $ProjectRoot ".deploy_artifacts"

# Files/folders to ship to the server
$PathsToCopy = @(
  ".next",
  "public",
  "package.json",
  "package-lock.json",
  "next.config.js",
  "middleware.js"
)

function Say($msg) { Write-Host "==> $msg" -ForegroundColor Cyan }

function Ensure-PathExists {
  param(
    [string]$Path,
    [string]$FriendlyName
  )
  if (-not (Test-Path $Path)) {
    throw "$FriendlyName was not found at $Path"
  }
}

$RemoteTarget = ("{0}@{1}:{2}" -f $User, $RemoteHost, $TargetPath)
$RemoteTemp   = ("{0}@{1}:{2}/" -f $User, $RemoteHost, $TempPath)

# 1) Build production bundle
Say "Building Next.js app (npm run build)..."
Push-Location $ProjectRoot
npm run build
Pop-Location

Ensure-PathExists -Path (Join-Path $ProjectRoot ".next") -FriendlyName ".next build output"

# 2) Prepare local artifact folder
Say "Preparing local artifacts in $ArtifactDir ..."
if (Test-Path $ArtifactDir) {
  Remove-Item $ArtifactDir -Recurse -Force
}
New-Item -ItemType Directory -Path $ArtifactDir | Out-Null

foreach ($relative in $PathsToCopy) {
  $source = Join-Path $ProjectRoot $relative
  if (Test-Path $source) {
    $leafName = Split-Path -Path $relative -Leaf
    if ([string]::IsNullOrWhiteSpace($leafName)) {
      $leafName = $relative.TrimEnd([char[]]"/\")
    }
    $destination = Join-Path $ArtifactDir $leafName
    Say "Staging $relative"
    Copy-Item $source -Destination $destination -Recurse -Force
  } else {
    Say "Skipping missing path: $relative"
  }
}

# 3) Ensure remote paths exist and are clean
Say "Preparing remote temp folder on $RemoteHost ..."
$prepCmd = "sudo rm -rf '$TempPath' && mkdir -p '$TempPath' && sudo mkdir -p '$TargetPath'"
ssh -i $KeyPath -p $Port -o StrictHostKeyChecking=accept-new "$User@$RemoteHost" $prepCmd

# 4) Upload artifacts
Say "Uploading artifacts to $RemoteTarget ..."
# Copy entire folder contents (including hidden .next) by scp'ing "./"
$scpSource = (Resolve-Path $ArtifactDir).Path + '\.'
scp -i $KeyPath -P $Port -o StrictHostKeyChecking=accept-new -r $scpSource $RemoteTemp

# 5) Publish + install deps + restart services
Say "Publishing to $TargetPath ..."

$remoteSteps = @()
$remoteSteps += "set -e"
$remoteSteps += "if command -v rsync >/dev/null 2>&1; then sudo rsync -a --delete '$TempPath/' '$TargetPath/'; else sudo rm -rf '$TargetPath'/*; sudo cp -a '$TempPath/.' '$TargetPath/'; fi"
$remoteSteps += "sudo chown -R ${User}:${User} '$TargetPath'"
$remoteSteps += "cd '$TargetPath'"
$remoteSteps += "if [ -f package-lock.json ]; then npm ci --omit=dev; else npm install --production; fi"
$remoteSteps += "sudo chown -R ${ServiceUser}:${ServiceUser} '$TargetPath'"
$remoteSteps += "sudo rm -rf '$TempPath'"
if ($AppRestartCommand -and $AppRestartCommand.Trim().Length -gt 0) {
  $remoteSteps += $AppRestartCommand
}
if ($NginxReloadCommand -and $NginxReloadCommand.Trim().Length -gt 0) {
  $remoteSteps += $NginxReloadCommand
}

$publishCmd = [string]::Join("; ", $remoteSteps)
ssh -i $KeyPath -p $Port -o StrictHostKeyChecking=accept-new "$User@$RemoteHost" $publishCmd

# 6) Clean up local artifacts
Say "Cleaning up local artifacts ..."
Remove-Item $ArtifactDir -Recurse -Force

Say "Done! Verify https://methodica.ai (Ctrl+F5 or private window)."
