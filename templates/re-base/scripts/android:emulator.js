#!/usr/bin/env node

const {readdir}           = require('fs').promises
const {spawn}             = require('child_process')
const {basename, extname} = require('path')


const {env} = process

if(!env.ANDROID_HOME) env.ANDROID_HOME = `${env.HOME}/Android/Sdk`

const EMULATOR = `${env.ANDROID_HOME}/emulator`

env.LD_LIBRARY_PATH = `${EMULATOR}/lib64:${EMULATOR}/lib64/qt/lib`


readdir(`${env.HOME}/.android/avd/`)
.then(function(files)
{
  let avd
  let minSdkVersion = Infinity

  for(let file of files)
  {
    file = basename(file, extname(file))

    const sdkVersion = parseInt(/\d+$/.exec(file)[0])
    if(sdkVersion < minSdkVersion)
    {
      avd = file
      minSdkVersion = sdkVersion
    }
  }

  return avd
})
.then(function(avd)
{
  const args =
  [
    '-netdelay', 'none',
    '-netspeed', 'full',
    '-avd', avd
  ]

  const options = {env, stdio: 'inherit'}

  spawn(`${EMULATOR}/qemu/linux-x86_64/qemu-system-x86_64`, args, options)
})
