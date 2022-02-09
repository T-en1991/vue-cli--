const path = require('path')
const { name } = require(path.resolve(process.cwd(), './package'))

module.exports = function (api) {
  api.chainWebpack(config => {
    config.output
      .library(`${name}-[name]`)
      .libraryTarget('umd')
      .jsonpFunction(`webpackJsonp_${name}`)
  })
}
