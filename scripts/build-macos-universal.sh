#!/bin/bash
# Build universal macOS binary (Intel + Apple Silicon)

echo "Building universal macOS binary..."
wails build -platform darwin/universal -clean
echo "Build complete! Check build/bin/"
