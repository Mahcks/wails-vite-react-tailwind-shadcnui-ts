#!/bin/bash
# Build for macOS (Apple Silicon - ARM64)

echo "Building for macOS (arm64 - Apple Silicon)..."
wails build -platform darwin/arm64 -clean
echo "Build complete! Check build/bin/"
