#!/usr/bin/env node

const {readFileSync, writeFileSync} = require('fs')


// Enable `react-native-web` in webpack by directly modifying files in `react-scripts`
function replace(name)
{
  const {dest, packageName, src} = this

  const path = `node_modules/${packageName}/config/${name}.js`
  const data = readFileSync(path, 'utf8')

  writeFileSync(path, data.replace(src, dest))
}

// Enable `react-native-web` in webpack by directly modifying files in `react-scripts`
const files =
[
  'jest/babelTransform',
  'webpack.config.dev',
  'webpack.config.prod'
]

files.forEach(function(name)
{
  const path = `node_modules/react-scripts/config/${name}.js`
  const data = readFileSync(path, 'utf8')

  writeFileSync(path, data.replace('babelrc: false,', 'babelrc: false,\nplugins: [\'react-native-web\'],'))
})

// Replace usage of `react-native-web` for `react-native-web_improved`
replace.call({
  dest: 'react-native-web_improved',
  packageName: 'babel-plugin-react-native-web',
  src: 'react-native-web'
}, 'index')
