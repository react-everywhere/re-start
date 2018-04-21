#!/usr/bin/env node

const {readFile, writeFile} = require('fs')


function updateJson(file, dependencies)
{
  readFile(file, 'utf8', function(error, data='{}')
  {
    if(error && error.code !== 'ENOENT') throw error

    data = Object.assign(JSON.parse(data), dependencies)

    writeFile(file, JSON.stringify(data, null, 2), function(error)
    {
      if(error) throw error
    })
  })
}


const {dependencies, devDependencies} = require('../package.json')

updateJson('templates/re-base/dependencies.json' , dependencies)
updateJson('templates/re-dux/dependencies.json'  , dependencies)
updateJson('templates/re-route/dependencies.json', dependencies)
updateJson('templates/re-start/dependencies.json', dependencies)

updateJson('templates/re-base/devDependencies.json' , devDependencies)
