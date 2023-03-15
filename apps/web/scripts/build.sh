#!/bin/bash
# Path: apps/web/scripts/build.sh

rm -rf ../extension
mkdir -p ../extension
mv out/_next out/next
find out -type f \( -name "*.html" -o -name "*.js" -o -name "*.json" \) -exec sed -i '' 's/\/_next\//\/next\//g' {} +
mv out/* ../extension

echo "Done"

