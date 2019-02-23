#!/usr/bin/env sh

PUBLIC_URL=. npm run web:release    || exit $?
cp index.electron.js build/index.js || exit $?
echo {} > build/package.json        || exit $?
