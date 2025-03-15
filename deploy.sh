#!/bin/bash

# Record of Ragnarok Deployment Script

echo "🔥 Record of Ragnarok Deployment Script 🔥"
echo "----------------------------------------"

# Build the project
echo "📦 Building the project..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build failed. Please fix the errors and try again."
  exit 1
fi

echo "✅ Build successful!"

# Ask for deployment method
echo ""
echo "Please select a deployment method:"
echo "1) GitHub Pages"
echo "2) Manual deployment (prepare files for upload)"
echo "3) Test build locally"
read -p "Enter your choice (1-3): " choice

case $choice in
  1)
    # GitHub Pages deployment
    echo ""
    echo "🚀 Deploying to GitHub Pages..."
    
    # Check if gh-pages is installed
    if ! npm list gh-pages --depth=0 > /dev/null 2>&1; then
      echo "Installing gh-pages package..."
      npm install --save-dev gh-pages
    fi
    
    # Uncomment the base path in vite.config.js
    sed -i 's/\/\/ base: /base: /g' vite.config.js
    
    # Build and deploy
    npm run deploy
    
    # Comment the base path again
    sed -i 's/base: /\/\/ base: /g' vite.config.js
    
    echo "✅ Deployed to GitHub Pages!"
    ;;
    
  2)
    # Manual deployment
    echo ""
    echo "📁 Preparing files for manual upload..."
    echo "The built files are in the 'dist' folder."
    echo "Upload all contents of the 'dist' folder to your web server."
    
    # Create a zip file for easy upload
    zip_file="record-of-ragnarok-build.zip"
    echo "Creating $zip_file..."
    cd dist && zip -r "../$zip_file" . && cd ..
    
    echo "✅ Created $zip_file for easy upload!"
    ;;
    
  3)
    # Test locally
    echo ""
    echo "🔍 Testing build locally..."
    npm run preview
    ;;
    
  *)
    echo "❌ Invalid choice. Exiting."
    exit 1
    ;;
esac

echo ""
echo "Thank you for using the Record of Ragnarok Deployment Script!" 