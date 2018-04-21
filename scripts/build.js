#!/usr/bin/env node

const {readFile, writeFile} = require('fs')


function updateJson(file, newData)
{
  readFile(file, 'utf8', function(error, data='{}')
  {
    if(error && error.code !== 'ENOENT') throw error

    data = Object.assign(JSON.parse(data), newData)

    writeFile(file, JSON.stringify(data, null, 2), function(error)
    {
      if(error) throw error
    })
  })
}


const {author, bugs, contributors, dependencies, devDependencies, homepage,
  license, repository, version} = require('../package.json')

updateJson('templates/re-base/dependencies.json' , dependencies)
updateJson('templates/re-dux/dependencies.json'  , dependencies)
updateJson('templates/re-route/dependencies.json', dependencies)
updateJson('templates/re-start/dependencies.json', dependencies)

updateJson('templates/re-base/devDependencies.json' , devDependencies)

const packageJson = {author, bugs, contributors, homepage, license, repository,
  version}

updateJson('templates/re-base/package.json' , packageJson)
updateJson('templates/re-dux/package.json'  , packageJson)
updateJson('templates/re-route/package.json', packageJson)
updateJson('templates/re-start/package.json', packageJson)
