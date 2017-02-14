var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction
      ? config.build.productionSourceMap
      : config.dev.cssSourceMap,
    extract: isProduction
  }),
  postcss: [
    require('autoprefixer')({
      browsers: ['last 2 versions']
    }),
    require('postcss-autoreset')({
      reset: {
        margin: 0,
        padding: 0,
        borderRadius: 0,
        listStyle: 'none',
        boxSizing: 'border-box'
      }
    }),
    require('precss')
  ]
}
