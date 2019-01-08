#!/usr/bin/env node

const {readFileSync, writeFileSync} = require('fs')
const {join} = require('path')


function replace(name)
{
  const {dest, dir = '', packageName, src} = this

  const path = join('node_modules', packageName, dir, `${name}.js`)
  const data = readFileSync(path, 'utf8')

  writeFileSync(path, data.replace(src, dest))
}

// Enable `react-native-web` in webpack by directly modifying files in `react-scripts`
const files =
[
  'jest/babelTransform',
  'webpack.config'
]

files.forEach(replace,
{
  dest: 'babelrc: false,\nplugins: [\'react-native-web\'],',
  dir: 'config',
  packageName: 'react-scripts',
  src: 'babelrc: false,'
})

// Replace usage of `react-native-web` for `react-native-web_improved`
replace.call({
  dest: 'react-native-web_improved',
  dir: 'src',
  packageName: 'babel-plugin-react-native-web',
  src: 'react-native-web'
}, 'index')
