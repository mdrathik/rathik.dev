Add-Type -AssemblyName System.Drawing

$width = 1200
$height = 630
$outputPath = Join-Path (Split-Path $PSScriptRoot -Parent) 'public\static\images\home-og.png'
$logoPath = Join-Path (Split-Path $PSScriptRoot -Parent) 'public\static\images\logo.jpeg'

$bitmap = [System.Drawing.Bitmap]::new($width, $height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

$background = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255, 12, 10, 9))
$gridPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(20, 168, 162, 158), 1)
$roseGlow = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(24, 244, 63, 94))
$orangeGlow = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(18, 249, 115, 22))
$whiteBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(250, 250, 249))
$mutedBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(168, 162, 158))
$dimBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(120, 113, 108))
$roseBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(244, 63, 94))
$orangeBrush = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(251, 146, 60))
$portraitRingPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(220, 244, 63, 94), 5)
$portraitOuterPen = [System.Drawing.Pen]::new([System.Drawing.Color]::FromArgb(70, 251, 146, 60), 2)

$fontSmall = [System.Drawing.Font]::new('Consolas', 22, [System.Drawing.FontStyle]::Regular)
$fontTitle = [System.Drawing.Font]::new('Segoe UI', 61, [System.Drawing.FontStyle]::Bold)
$fontSubtitle = [System.Drawing.Font]::new('Segoe UI', 25, [System.Drawing.FontStyle]::Regular)
$fontFooter = [System.Drawing.Font]::new('Consolas', 18, [System.Drawing.FontStyle]::Regular)
$portrait = [System.Drawing.Image]::FromFile($logoPath)
$portraitPath = [System.Drawing.Drawing2D.GraphicsPath]::new()
$portraitRectangle = [System.Drawing.RectangleF]::new(942, 120, 176, 176)
$portraitPath.AddEllipse($portraitRectangle)

try {
  $graphics.FillRectangle($background, 0, 0, $width, $height)
  $graphics.FillEllipse($roseGlow, -130, -160, 650, 650)
  $graphics.FillEllipse($orangeGlow, 850, 320, 520, 520)

  for ($x = 0; $x -le $width; $x += 48) {
    $graphics.DrawLine($gridPen, $x, 0, $x, $height)
  }
  for ($y = 0; $y -le $height; $y += 48) {
    $graphics.DrawLine($gridPen, 0, $y, $width, $y)
  }

  $graphics.DrawString('$ whoami', $fontSmall, $roseBrush, 72, 78)

  $titleY = 168
  $graphics.DrawString('I build', $fontTitle, $whiteBrush, 68, $titleY)
  $firstWidth = $graphics.MeasureString('I build', $fontTitle).Width
  $graphics.DrawString('#SHIT', $fontTitle, $roseBrush, 68 + $firstWidth - 3, $titleY)

  $secondY = 250
  $graphics.DrawString('that somehow', $fontTitle, $whiteBrush, 68, $secondY)
  $secondWidth = $graphics.MeasureString('that somehow', $fontTitle).Width
  $graphics.DrawString('works.', $fontTitle, $orangeBrush, 68 + $secondWidth - 3, $secondY)

  $graphics.DrawString('CTO. Full Stack Developer. Still writes code.', $fontSubtitle, $mutedBrush, 72, 370)
  $graphics.DrawString('Built with OpenAI, Claude, and questionable confidence.', $fontFooter, $dimBrush, 72, 555)

  $portraitState = $graphics.Save()
  $graphics.SetClip($portraitPath)
  $graphics.DrawImage($portrait, $portraitRectangle)
  $graphics.Restore($portraitState)
  $graphics.DrawEllipse($portraitOuterPen, 934, 112, 192, 192)
  $graphics.DrawEllipse($portraitRingPen, 940, 118, 180, 180)

  $bitmap.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
}
finally {
  $portraitPath.Dispose()
  $portrait.Dispose()
  $fontSmall.Dispose()
  $fontTitle.Dispose()
  $fontSubtitle.Dispose()
  $fontFooter.Dispose()
  $background.Dispose()
  $gridPen.Dispose()
  $roseGlow.Dispose()
  $orangeGlow.Dispose()
  $whiteBrush.Dispose()
  $mutedBrush.Dispose()
  $dimBrush.Dispose()
  $roseBrush.Dispose()
  $orangeBrush.Dispose()
  $portraitRingPen.Dispose()
  $portraitOuterPen.Dispose()
  $graphics.Dispose()
  $bitmap.Dispose()
}

Write-Output $outputPath
