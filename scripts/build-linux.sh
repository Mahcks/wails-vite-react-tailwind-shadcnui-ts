#!/bin/bash
# Build for Linux (AMD64)

echo "Building for Linux (amd64)..."
wails build -platform linux/amd64 -clean
echo "Build complete! Check build/bin/"
