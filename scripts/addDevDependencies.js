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

    for (const depName in devDependencies) {
        const depVersion = devDependencies[depName];
        const depToInstall = `${depName}@${depVersion}`;
        console.log(`Adding ${depToInstall}...`);

        if (getYarnVersionIfAvailable()) {
            execSync(`yarn add ${depToInstall} -D`, {stdio: 'inherit'});
        } else {
            execSync(`npm install ${depToInstall} --save`);
        }
    }
    console.log("Deleting devDependencies.json...");
    execSync(`rm  ${devDependenciesJsonPath}`);
}

function addAdditionalScripts() {
    const fileName = "package.json";
    const packageFile = path.resolve(fileName);
    let file = require(packageFile);
    //these are the scripts that will be added to package.json
    file.scripts['web'] = "node scripts/start.js";
    file.scripts["build"] = "node scripts/build.js";
    fs.writeFileSync(fileName, JSON.stringify(file));
    console.log(`Adding scripts for web to package.json`);
}

installDevDependencies();
addAdditionalScripts();

