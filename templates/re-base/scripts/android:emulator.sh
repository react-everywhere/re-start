#!/usr/bin/env sh

if [ ! $ANDROID_HOME ]; then
  ANDROID_HOME=$HOME/Android/Sdk
fi

EMULATOR=$ANDROID_HOME/emulator


LD_LIBRARY_PATH=$EMULATOR/lib64/qt/lib \
  $EMULATOR/qemu/linux-x86_64/qemu-system-x86_64 \
    -netdelay none \
    -netspeed full \
    -gpu off \
    -avd Nexus_5X_API_27
