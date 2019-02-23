#!/usr/bin/env sh

react-native bundle \
  --platform=windows \
  --entry-file index.js \
  --assets-dest windows/helloworld/ReactAssets \
  --bundle-output windows/helloworld/ReactAssets/index.windows.bundle
  --dev false
