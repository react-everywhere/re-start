#!/usr/bin/env node

'use strict';

const {execSync} = require('child_process');
const {existsSync, renameSync, unlinkSync, writeFileSync} = require('fs');
const {basename, resolve} = require('path');


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

    const projectName = basename(__dirname)
    const windows_release =
    [
      'react-native', 'bundle', '--platform=windows',
      '--entry-file', 'index.js',
      '--assets-dest', `windows/${projectName}/ReactAssets`,
      '--bundle-output', `windows/${projectName}/ReactAssets/index.windows.bundle`,
      '--dev', 'false'
    ].join(' ')

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
      "electron:release": "electron-packager build --all --asar --icon=/tmp/app --overwrite --out=electron",
      "icon-gen": "icon-gen -i resources/icon.svg -o /tmp && cp /tmp/favicon-228.png /tmp/app.png && mv /tmp/favicon* public",
      "install": "node scripts/install.js",
      "ios": "react-native run-ios",
      "ios:release": "react-native bundle --platform=ios",
      "preandroid": "scripts/preandroid.sh",
      "preelectron": "PUBLIC_URL=. npm run web:release && cp index.electron.js build/index.js && echo {} > build/package.json",
      "preelectron:release": "npm run preelectron",
      "preweb:release": "npm run icon-gen",
      "release": "npm run android:release && npm run electron:release && npm run ios:release && npm run web:release && npm run windows:release",
      "test:web": "react-scripts test --env=jsdom",
      "web": "react-scripts start",
      "web:release": "react-scripts build",
      "windows": "react-native run-windows",
      "windows:release": windows_release
    })

    writeFileSync(fileName, JSON.stringify(file, null, 2));
}


enableWindows();
moveAppJs();
updateGitIgnore();
updatePackageJson();


// We have already finished the install, delete ourselves
unlinkSync(__filename);
