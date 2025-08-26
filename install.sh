#!/bin/bash

echo "🚀 Setting up Namazkhana Map Project..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cat > .env << EOF
# Environment variables for Namazkhana Map
REACT_APP_MAP_TILE_URL=https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
REACT_APP_DEFAULT_CENTER_LAT=43.2367
REACT_APP_DEFAULT_CENTER_LNG=76.9091
REACT_APP_DEFAULT_ZOOM=12
EOF
    echo "✅ .env file created"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "To start the development server, run:"
echo "  npm start"
echo ""
echo "To build for production, run:"
echo "  npm run build"
echo ""
echo "The app will be available at: http://localhost:3000"
echo ""
echo "📱 Mobile-first design optimized for prayer place discovery"
echo "🗺️  Interactive map with clustering and custom markers"
echo "✨ Smooth animations and responsive popups"
