#!/bin/bash

echo "🚀 Deploying BEAM Theology & World Religions Institute..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🎯 Next steps:"
    echo "1. Push your code to GitHub:"
    echo "   git add ."
    echo "   git commit -m 'Initial commit: BEAM Theology landing page'"
    echo "   git push origin main"
    echo ""
    echo "2. Deploy to Vercel:"
    echo "   - Connect your GitHub repo to Vercel"
    echo "   - Vercel will auto-detect Next.js and deploy"
    echo "   - Add environment variables in Vercel dashboard"
    echo ""
    echo "3. Or deploy manually:"
    echo "   npm start"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
