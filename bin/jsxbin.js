#! /usr/bin/env node

const jsxbin = require('jsxbin')
const path = require('path')
const dirname = path.resolve()
const packageName = process.env.npm_package_name;

console.log(dirname)
console.log(path.join(dirname, 'dist', `${packageName}.jsx`))
console.log('Making a binary file...')
jsxbin(path.join(dirname, 'dist', `${packageName}.jsx`))