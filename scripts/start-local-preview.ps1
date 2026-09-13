$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$previewState = Join-Path $projectRoot ".local-preview"
$nodePathFile = Join-Path $previewState "node-path.txt"
$lifecycleScript = Join-Path $PSScriptRoot "preview-lifecycle.ps1"
$lifecycleTaskName = "EngineeringDigitalPortfolioPreviewLifecycle"
$retiredTaskNames = @(
  "EngineeringDigitalPortfolioPreview",
  "EngineeringDigitalPortfolioPreviewWatchdog"
)

New-Item -ItemType Directory -Path $previewState -Force | Out-Null

$nodeCommand = Get-Command node.exe -ErrorAction SilentlyContinue
if ($nodeCommand -and (Test-Path -LiteralPath $nodeCommand.Source)) {
  Set-Content -LiteralPath $nodePathFile -Value $nodeCommand.Source
}

foreach ($taskName in $retiredTaskNames) {
  $retiredTask = Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue
  if ($retiredTask) {
    if ($retiredTask.State -eq "Running") {
      Stop-ScheduledTask -TaskName $taskName
    }
    Unregister-ScheduledTask -TaskName $taskName -Confirm:$false
  }
}

$ownedPreviewProcesses = Get-CimInstance Win32_Process -Filter "Name = 'node.exe'" -ErrorAction SilentlyContinue |
  Where-Object {
    $_.CommandLine -and
    $_.CommandLine.IndexOf($projectRoot, [StringComparison]::OrdinalIgnoreCase) -ge 0 -and
    $_.CommandLine -match "next[\\/]dist[\\/]bin[\\/]next"
  }

$taskKill = Join-Path $env:SystemRoot "System32\taskkill.exe"
foreach ($ownedPreviewProcess in $ownedPreviewProcesses) {
  Start-Process `
    -FilePath $taskKill `
    -ArgumentList @("/PID", "$($ownedPreviewProcess.ProcessId)", "/T", "/F") `
    -WindowStyle Hidden `
    -Wait | Out-Null
}

$existingLifecycleTask = Get-ScheduledTask -TaskName $lifecycleTaskName -ErrorAction SilentlyContinue
if ($existingLifecycleTask) {
  if ($existingLifecycleTask.State -eq "Running") {
    Stop-ScheduledTask -TaskName $lifecycleTaskName
  }
  Unregister-ScheduledTask -TaskName $lifecycleTaskName -Confirm:$false
}

$powerShellExe = Join-Path $env:SystemRoot "System32\WindowsPowerShell\v1.0\powershell.exe"
$taskArguments = "-NoProfile -NonInteractive -ExecutionPolicy Bypass -WindowStyle Hidden -File `"$lifecycleScript`""
$taskAction = New-ScheduledTaskAction `
  -Execute $powerShellExe `
  -Argument $taskArguments `
  -WorkingDirectory $projectRoot
$logonTrigger = New-ScheduledTaskTrigger -AtLogOn -User "$env:USERDOMAIN\$env:USERNAME"
$taskSettings = New-ScheduledTaskSettingsSet `
  -AllowStartIfOnBatteries `
  -DontStopIfGoingOnBatteries `
  -ExecutionTimeLimit ([TimeSpan]::Zero) `
  -RestartCount 3 `
  -RestartInterval (New-TimeSpan -Minutes 1) `
  -MultipleInstances IgnoreNew `
  -StartWhenAvailable `
  -Hidden

Register-ScheduledTask `
  -TaskName $lifecycleTaskName `
  -Action $taskAction `
  -Trigger $logonTrigger `
  -Settings $taskSettings `
  -Description "Starts the hidden Engineering Digital Portfolio preview while Codex is open." `
  -Force | Out-Null

Start-ScheduledTask -TaskName $lifecycleTaskName

Write-Output "Codex-linked local preview is installed."
Write-Output "The preview runs hidden while Codex is open and stops after Codex closes."
Write-Output "No recurring website health check is configured."
