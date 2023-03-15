#!/bin/bash
# Path: apps/web/scripts/build.sh

rm -rf ../extension/out
mv out/_next out/next
find out -type f -name "*.html" -exec sed -i '' 's/\/_next\//\/out\/next\//g' {} +
mv out ../extension
echo "Done"

