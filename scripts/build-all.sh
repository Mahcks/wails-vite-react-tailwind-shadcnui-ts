#!/bin/bash
# Build script for all platforms

echo "Building for all platforms..."
echo "================================"

# Build for Windows AMD64
echo "Building for Windows (amd64)..."
wails build -platform windows/amd64 -clean

# Build for Linux AMD64
echo "Building for Linux (amd64)..."
wails build -platform linux/amd64 -clean

# Build for macOS ARM64 (Apple Silicon)
echo "Building for macOS (arm64)..."
wails build -platform darwin/arm64 -clean

# Build for macOS AMD64 (Intel)
echo "Building for macOS (amd64)..."
wails build -platform darwin/amd64 -clean

echo "================================"
echo "Build complete! Check build/bin/ directory"
