#!/usr/bin/env node

const {readdir, readFile} = require('fs').promises
const {spawn}             = require('child_process')
const {basename, extname} = require('path')


const {env} = process

if(!env.ANDROID_HOME) env.ANDROID_HOME = `${env.HOME}/Android/Sdk`

const EMULATOR = `${env.ANDROID_HOME}/emulator`

env.LD_LIBRARY_PATH = `${EMULATOR}/lib64:${EMULATOR}/lib64/qt/lib`


Promise.all([
  readdir(`${env.HOME}/.android/avd/`),
  readFile(`${__dirname}/../android/build.gradle`, 'utf8')
  .then(function(data)
  {
    const result = /minSdkVersion\s*=\s*(\d+)/.exec(data)
    if(!result)
      throw new Error('`minSdkVersion` not found in `build.gradle` file')

    return parseInt(result[1])
  })
])
.then(function([files, minSdkVersion])
{
  let avd
  let lowerSdkVersion = Infinity

  for(let file of files)
  {
    file = basename(file, extname(file))

    const sdkVersion = parseInt(/\d+$/.exec(file)[0])
    if(minSdkVersion <= sdkVersion  && sdkVersion < lowerSdkVersion)
    {
      avd = file
      lowerSdkVersion = sdkVersion
    }
  }

  if(!avd) throw new Error('`AVD` not found')

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
