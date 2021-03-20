const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BUILD_TARGET_PATH = path.join(__dirname, './dist')

module.exports = (env, args) => {
  return {
    entry: './index.tsx',
    devtool: 'inline-source-map',
    output: {
      path: BUILD_TARGET_PATH,
      filename: '[name].js',
      chunkFilename: '[id].js'
    },
    devServer: {
      contentBase: BUILD_TARGET_PATH,
      port: 9000,
      writeToDisk: true
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    module: {
      rules: [
        { test: /\.tsx?$/, use: ['ts-loader'] },
        { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      })
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  }
}