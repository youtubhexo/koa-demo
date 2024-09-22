const webpackMerge= require('webpack-merge')

const base=require('./webpack.config.base')

const TerserPlugin=require('terser-webpack-plugin')

const webpackConfig=webpackMerge(base,{
    mode: 'production',
    optimization: {
        minimizer: [new TerserPlugin()],
      },
})
module.exports= webpackConfig
