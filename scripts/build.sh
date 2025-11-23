#!/bin/bash
# Simple production build for current platform

echo "Building for production..."
wails build -clean
echo "Build complete! Check build/bin/"
