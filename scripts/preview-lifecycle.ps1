$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $PSScriptRoot
$previewState = Join-Path $projectRoot ".local-preview"
$previewPidFile = Join-Path $previewState "preview.pid"
$nodePathFile = Join-Path $previewState "node-path.txt"
$lifecycleLog = Join-Path $previewState "lifecycle.log"
$stdoutLog = Join-Path $previewState "server.stdout.log"
$stderrLog = Join-Path $previewState "server.stderr.log"
$nextScript = Join-Path $projectRoot "node_modules\next\dist\bin\next"

New-Item -ItemType Directory -Path $previewState -Force | Out-Null

function Write-LifecycleLog {
  param([string]$Message)

  Add-Content -LiteralPath $lifecycleLog -Value "$(Get-Date -Format s) $Message"
}

function Test-CodexRunning {
  $codexProcess = Get-Process -Name "ChatGPT" -ErrorAction SilentlyContinue |
    Where-Object {
      try {
        $_.Path -and $_.Path -like "*\OpenAI.Codex_*\app\ChatGPT.exe"
      } catch {
        $false
      }
    } |
    Select-Object -First 1

  return $null -ne $codexProcess
}

function Get-NodePath {
  if (Test-Path -LiteralPath $nodePathFile) {
    $savedNodePath = (Get-Content -LiteralPath $nodePathFile -Raw).Trim()
    if ($savedNodePath -and (Test-Path -LiteralPath $savedNodePath)) {
      return $savedNodePath
    }
  }

  $nodeCommand = Get-Command node.exe -ErrorAction SilentlyContinue
  if ($nodeCommand -and (Test-Path -LiteralPath $nodeCommand.Source)) {
    return $nodeCommand.Source
  }

  $candidateRoots = @(
    (Join-Path $env:USERPROFILE ".cache\codex-runtimes"),
    (Join-Path $env:LOCALAPPDATA "OpenAI\Codex\runtimes")
  )

  foreach ($candidateRoot in $candidateRoots) {
    if (-not (Test-Path -LiteralPath $candidateRoot)) {
      continue
    }

    $candidate = Get-ChildItem -LiteralPath $candidateRoot -Filter node.exe -File -Recurse -ErrorAction SilentlyContinue |
      Sort-Object LastWriteTime -Descending |
      Select-Object -First 1
    if ($candidate) {
      return $candidate.FullName
    }
  }

  throw "Node.js could not be located for the local preview."
}

function Test-OwnedPreviewProcess {
  param([int]$ProcessId)

  $process = Get-CimInstance Win32_Process -Filter "ProcessId = $ProcessId" -ErrorAction SilentlyContinue
  if (-not $process -or -not $process.CommandLine) {
    return $false
  }

  return $process.Name -eq "node.exe" -and
    $process.CommandLine.IndexOf($projectRoot, [StringComparison]::OrdinalIgnoreCase) -ge 0 -and
    $process.CommandLine.IndexOf($nextScript, [StringComparison]::OrdinalIgnoreCase) -ge 0
}

function Get-OwnedPreviewProcessId {
  if (Test-Path -LiteralPath $previewPidFile) {
    $savedPid = 0
    if ([int]::TryParse((Get-Content -LiteralPath $previewPidFile -Raw).Trim(), [ref]$savedPid)) {
      $savedProcess = Get-Process -Id $savedPid -ErrorAction SilentlyContinue
      if ($savedProcess -and $savedProcess.ProcessName -eq "node") {
        return $savedPid
      }
    }
  }

  $existingProcess = Get-CimInstance Win32_Process -Filter "Name = 'node.exe'" -ErrorAction SilentlyContinue |
    Where-Object {
      $_.CommandLine -and
      $_.CommandLine.IndexOf($projectRoot, [StringComparison]::OrdinalIgnoreCase) -ge 0 -and
      $_.CommandLine.IndexOf($nextScript, [StringComparison]::OrdinalIgnoreCase) -ge 0
    } |
    Sort-Object CreationDate |
    Select-Object -First 1

  if ($existingProcess) {
    Set-Content -LiteralPath $previewPidFile -Value $existingProcess.ProcessId
    return [int]$existingProcess.ProcessId
  }

  Remove-Item -LiteralPath $previewPidFile -Force -ErrorAction SilentlyContinue
  return 0
}

function Start-Preview {
  $existingPid = Get-OwnedPreviewProcessId
  if ($existingPid) {
    return
  }

  if (-not (Test-Path -LiteralPath $nextScript)) {
    Write-LifecycleLog "Preview not started because Next.js is not installed."
    return
  }

  $nodePath = Get-NodePath
  $arguments = "`"$nextScript`" dev `"$projectRoot`" --hostname 127.0.0.1 --port 3000"
  $previewProcess = Start-Process `
    -FilePath $nodePath `
    -ArgumentList $arguments `
    -WorkingDirectory $projectRoot `
    -WindowStyle Hidden `
    -RedirectStandardOutput $stdoutLog `
    -RedirectStandardError $stderrLog `
    -PassThru

  Set-Content -LiteralPath $previewPidFile -Value $previewProcess.Id
  Write-LifecycleLog "Codex is running; started the hidden preview (PID $($previewProcess.Id))."
}

function Stop-Preview {
  $previewPid = Get-OwnedPreviewProcessId
  if (-not $previewPid) {
    return
  }

  if (-not (Test-OwnedPreviewProcess -ProcessId $previewPid)) {
    Remove-Item -LiteralPath $previewPidFile -Force -ErrorAction SilentlyContinue
    return
  }

  $taskKill = Join-Path $env:SystemRoot "System32\taskkill.exe"
  Start-Process `
    -FilePath $taskKill `
    -ArgumentList @("/PID", "$previewPid", "/T", "/F") `
    -WindowStyle Hidden `
    -Wait | Out-Null
  Remove-Item -LiteralPath $previewPidFile -Force -ErrorAction SilentlyContinue
  Write-LifecycleLog "Codex is closed; stopped the preview process tree."
}

function Sync-PreviewWithCodex {
  if (Test-CodexRunning) {
    Start-Preview
  } else {
    Stop-Preview
  }
}

try {
  Write-LifecycleLog "Lifecycle helper started. It checks only whether Codex is running and never polls the website."
  while ($true) {
    Sync-PreviewWithCodex
    Start-Sleep -Seconds 5
  }
} catch {
  Write-LifecycleLog "Lifecycle helper error: $($_.Exception.Message)"
  throw
}
