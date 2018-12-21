#!/usr/bin/env node

const {readdir, readFile, writeFile} = require('fs')


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

    writeFile(file, JSON.stringify(data, null, 2)+'\n', function(error)
    {
      if(error) throw error
    })
  })
}


const {author, bugs, contributors, dependencies, devDependencies, homepage,
  license, repository, version} = require('../package.json')

const packageJson = {author, bugs, contributors, homepage, license, repository,
  version}

readdir('templates', function(error, files)
{
  if(error) throw error

  for(const file of files)
  {
    updateJson(`templates/${file}/devDependencies.json`, devDependencies)
    updateDependencies(file , dependencies, packageJson)
  }
})
