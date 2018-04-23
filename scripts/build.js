#!/usr/bin/env node

const {readFile, writeFile} = require('fs')


function updateDependencies(template, dependencies, packageJson)
{
  const PKG = require(`../templates/${template}/package.json`)

  dependencies = Object.keys(PKG.dependencies || {}).reduce(function(acum, name)
  {
    acum[name] = dependencies[name]

    return acum
  }, {})

  updateJson(`templates/${template}/dependencies.json`, dependencies)
  updateJson(`templates/${template}/package.json`,
    {...PKG, ...packageJson, dependencies})
}

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

updateJson('templates/re-base/devDependencies.json' , devDependencies)

const packageJson = {author, bugs, contributors, homepage, license, repository,
  version}

updateDependencies('re-base' , dependencies, packageJson)
updateDependencies('re-dux'  , dependencies, packageJson)
updateDependencies('re-route', dependencies, packageJson)
updateDependencies('re-start', dependencies, packageJson)
