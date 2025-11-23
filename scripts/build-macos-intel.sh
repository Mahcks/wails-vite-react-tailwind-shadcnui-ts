#!/bin/bash
# Build for macOS (Intel - AMD64)

echo "Building for macOS (amd64 - Intel)..."
wails build -platform darwin/amd64 -clean
echo "Build complete! Check build/bin/"
