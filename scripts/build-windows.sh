#!/bin/bash
# Build for Windows (AMD64)

echo "Building for Windows (amd64)..."
wails build -platform windows/amd64 -clean
echo "Build complete! Check build/bin/"
