const path=require('path')
const webpack=require('webpack')
const nodeExcternals =require('webpack-node-externals')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const webpackconfig=

 {
    entry: path.join(__dirname,"../src/index.js"),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].bundle.js'
      },
      module: {
        rules: [
          { test: /\.(js|jsx)$/, 
            use: {
              loader: 'babel-loader'
            },
            exclude:[path.join(__dirname,'node_modules')]
          }
        ]
      },
      externals: [nodeExcternals()],
      
      plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
              NODE_ENV:(process.env.NODE_ENV==='production'||
                process.env.NODE_ENV==='prod')?"'production'":
                "'development'"
            }
        })
      ],
    
      
      target:"node",
      node: {
        console: true,
        global: true,
        process: true,
        __filename: true,
        __dirname: true,
        Buffer: true,
        setImmediate: true,
        path:true
    
        // 更多选项，请查看“其他 Node.js 核心库”。
      }
  };

  module.exports =webpackconfig