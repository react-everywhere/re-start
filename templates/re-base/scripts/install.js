#!/usr/bin/env node

const {readFileSync, writeFileSync} = require('fs')


// Enable `.babelrc` file support in `react-scripts`
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

  writeFileSync(path, data.replace('babelrc: false', 'babelrc: true'))
})
