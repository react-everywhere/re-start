#!/usr/bin/env sh

# kill server from previous session
npm run android:kill_server || exit $?

# start emulator if no device is detected
if ! adb devices | grep device$ -q; then
  npm run android:emulator &
fi
