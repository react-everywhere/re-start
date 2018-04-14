#!/usr/bin/env node

'use strict';

const {execSync} = require('child_process');
const {existsSync, readFileSync, renameSync, unlinkSync, writeFileSync} = require('fs');
const {resolve} = require('path');

/**
 * Use Yarn if available, it's much faster than the npm client.
 * Return the version of yarn installed on the system, null if yarn is not available.
 */
function getYarnVersionIfAvailable() {
    let yarnVersion;
    try {
        // execSync returns a Buffer -> convert to string
        yarnVersion = (execSync('yarn --version', {
            stdio: [0, 'pipe', 'ignore'],
        }).toString() || '').trim();
    } catch (error) {
        return null;
    }
    return yarnVersion;
}

function installDevDependencies() {
    console.log('Adding dev dependencies for the project...');

    const devDependenciesJsonPath = resolve('devDependencies.json');
    const devDependencies = JSON.parse(readFileSync(devDependenciesJsonPath));
    let depsToInstall = [];

    for (const depName in devDependencies) {
        const depVersion = devDependencies[depName];
        const depToInstall = `${depName}@${depVersion}`;
        depsToInstall.push(depToInstall);
    }

    depsToInstall = depsToInstall.join(' ');
    console.log(`Adding ${depsToInstall}...`);
    if (getYarnVersionIfAvailable()) {
        execSync(`yarn add ${depsToInstall} -D`, {stdio: 'inherit'});
    } else {
        execSync(`npm install ${depsToInstall} --save`);
    }
    console.log("Deleting devDependencies.json...");
    unlinkSync(devDependenciesJsonPath);
}

function moveAppJs() {
  const src  = resolve('App.js')
  const dest = resolve('src', 'App.js')

  if(existsSync(dest))
    unlinkSync(src)
  else
    renameSync(src, dest);
}

function updatePackageJson() {
    const fileName = "package.json";
    const file = require(resolve(fileName));

    //these are the scripts that will be added to package.json
    console.log(`Adding scripts for web to package.json`);
    Object.assign(file.scripts,
    {
      "android": "react-native run-android",
      "android:dev_menu": "adb shell input keyevent KEYCODE_MENU",
      "android:kill_server": "fuser -k 8081/tcp || true",
      "android:log": "react-native log-android",
      "android:release": "cd android && ./gradlew assembleRelease",
      "eject": "react-scripts eject",
      "electron": "electron .",
      "ios": "react-native run-ios",
      "preelectron": "PUBLIC_URL=. npm run web:release",
      "release": "npm run android:release && npm run web:release",
      "test:web": "react-scripts test --env=jsdom",
      "web": "react-scripts start",
      "web:release": "react-scripts build",
      "windows": "react-native run-windows"
    })

    // Electron entry point
    file.main = 'index.electron.js'

    writeFileSync(fileName, JSON.stringify(file, null, 2));
}


installDevDependencies();
moveAppJs();
updatePackageJson();


// We have already installed the aditional dependencies, delete ourselves
unlinkSync(__filename);
