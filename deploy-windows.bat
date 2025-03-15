@echo off
echo 🔥 Record of Ragnarok Deployment Script 🔥
echo ----------------------------------------

:: Build the project
echo 📦 Building the project...
call npm run build

if %ERRORLEVEL% NEQ 0 (
  echo ❌ Build failed. Please fix the errors and try again.
  exit /b 1
)

echo ✅ Build successful!

:: Ask for deployment method
echo.
echo Please select a deployment method:
echo 1) GitHub Pages
echo 2) Manual deployment (prepare files for upload)
echo 3) Test build locally
set /p choice="Enter your choice (1-3): "

if "%choice%"=="1" (
  :: GitHub Pages deployment
  echo.
  echo 🚀 Deploying to GitHub Pages...
  
  :: Check if gh-pages is installed
  call npm list gh-pages --depth=0 >nul 2>&1
  if %ERRORLEVEL% NEQ 0 (
    echo Installing gh-pages package...
    call npm install --save-dev gh-pages
  )
  
  :: Deploy
  call npm run deploy
  
  echo ✅ Deployed to GitHub Pages!
) else if "%choice%"=="2" (
  :: Manual deployment
  echo.
  echo 📁 Preparing files for manual upload...
  echo The built files are in the 'dist' folder.
  echo Upload all contents of the 'dist' folder to your web server.
  
  echo ✅ Files ready for upload!
) else if "%choice%"=="3" (
  :: Test locally
  echo.
  echo 🔍 Testing build locally...
  call npm run preview
) else (
  echo ❌ Invalid choice. Exiting.
  exit /b 1
)

echo.
echo Thank you for using the Record of Ragnarok Deployment Script! 