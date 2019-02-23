#!/usr/bin/env node

'use strict';

const {execSync} = require('child_process');
const {existsSync, renameSync, unlinkSync, writeFileSync} = require('fs');
const {resolve} = require('path');


function enableWindows() {
    console.log('Enable Windows support to the project...');
    execSync(`react-native windows`, {stdio: 'inherit'});

    unlinkSync(resolve('App.windows.js'))
}

function moveAppJs() {
  const src  = resolve('App.js')
  const dest = resolve('src', 'App.js')

  if(existsSync(dest))
    unlinkSync(src)
  else
    renameSync(src, dest);
}

function updateGitIgnore() {
  writeFileSync('.gitignore', 'electron/\npublic/favicon*\n', {flag: 'a'})
}

function updatePackageJson() {
    const fileName = "package.json";
    const file = require(resolve(fileName));

    //these are the scripts that will be added to package.json
    console.log(`Adding scripts for web to package.json`);

    Object.assign(file.scripts,
    {
      "android": "react-native run-android",
      "android:clean": "cd android && ./gradlew clean",
      "android:dev_menu": "adb shell input keyevent KEYCODE_MENU",
      "android:emulator": "scripts/android:emulator.js",
      "android:kill_server": "fuser -k 8081/tcp || true",
      "android:log": "react-native log-android",
      "android:release": "cd android && ./gradlew assembleRelease",
      "eject": "react-scripts eject",
      "electron": "electron build",
      "electron:release": "scripts/electron:release.sh",
      "icon-gen": "scripts/icon-gen.sh",
      "install": "node scripts/install.js",
      "ios": "react-native run-ios",
      "ios:release": "react-native bundle --platform=ios",
      "preandroid": "scripts/preandroid.sh",
      "preelectron": "scripts/preelectron.sh",
      "preelectron:release": "npm run preelectron",
      "preweb:release": "npm run icon-gen",
      "preweb:release:serve": "npm run web:release",
      "release": "scripts/release.sh",
      "test:web": "react-scripts test --env=jsdom",
      "web": "react-scripts start",
      "web:release": "react-scripts build",
      "web:release:serve": "serve -s build",
      "windows": "react-native run-windows",
      "windows:release": "scripts/windows:release.sh"
    })

    writeFileSync(fileName, JSON.stringify(file, null, 2));
}


enableWindows();
moveAppJs();
updateGitIgnore();
updatePackageJson();


// We have already finished the install, delete ourselves
unlinkSync(__filename);
