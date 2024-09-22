const webpackMerge=require('webpack-merge')

const base=require('./webpack.config.base')

const webpackConfig=webpackMerge(base,{
    devtool:'eval-source-map',
    mode: 'development',
    stats:{children:false}
})

module.exports= webpackConfig