'use strict';

const execSync = require('child_process').execSync;
const fs = require('fs');
const path = require('path');

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

    const devDependenciesJsonPath = path.resolve('devDependencies.json');
    const devDependencies = JSON.parse(fs.readFileSync(devDependenciesJsonPath));
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
    execSync(`rm  ${devDependenciesJsonPath}`);
}

//"resolutions": { "moment-timezone/moment": "2.19.0" }

function updatePackageJson() {
    const fileName = "package.json";
    const packageFile = path.resolve(fileName);
    let file = require(packageFile);
    //these are the scripts that will be added to package.json
    console.log(`Adding scripts for web to package.json`);
    file.scripts['web'] = "react-scripts start";
    file.scripts["build"] = "react-scripts build";
    file.scripts["test-web"] = "react-scripts test --env=jsdom";
    file.scripts["eject"] = "react-scripts eject";
    file.scripts["electron"] = "react-scripts start & electron .";
    console.log(`Adding entry point for electron`);
    file['main'] = "index.electron.js";
    file['resolutions'] = {"moment-timezone/moment": "2.19.0"};
    fs.writeFileSync(fileName, JSON.stringify(file));
}


installDevDependencies();
updatePackageJson();

