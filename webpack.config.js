const path = require('path')
const fs = require('fs')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const StaticAssetsPlugin = require('./utils/staticAssetsPlugin')
const entryPath = './src/views/'

const entry = entryPath => {
  const dirs = fs.readdirSync(entryPath)
  const obj = {}
  dirs.forEach(path => {
    obj[path.slice(0, -3)] = entryPath + path
  })
  return obj
}

module.exports = function(env, argv) {
  const isProduction = argv.mode === 'production'
  return {
    // entry: './main.js',
    entry: entry(entryPath),
    output: {
      path: path.resolve(__dirname, 'love'),
      filename: '[name].[hash].js'
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            // 自定义module
            {
              loader: './utils/removeConsole'
            },
            {
              loader: 'babel-loader'
            }
          ]
        }
      ],
    },
    plugins: [
      new HTMLWebpackPlugin({
        // 源文件模板
        template: path.resolve(__dirname, 'public/index.html'),
        // 输出的文件
        filename: 'index.html',
        title: 'Study 19-11-24',
        inject: true,
        hash: true
      }),
      new StaticAssetsPlugin({
        isProduction
      })
    ]
  }
}
