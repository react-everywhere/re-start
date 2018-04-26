#!/usr/bin/env node

const {readFileSync, writeFileSync} = require('fs');


// Enable `.babelrc` file support in `react-scripts`
['jest/babelTransform', 'webpack.config.dev', 'webpack.config.prod']
.forEach(function(name)
{
  const path = `node_modules/react-scripts/config/${file}.js`
  const data = readFileSync(path, 'utf8')

  writeFileSync(file, data.replace('babelrc: false', 'babelrc: true'))
})
