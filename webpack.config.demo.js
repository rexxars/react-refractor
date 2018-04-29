const path = require('path')

const isProd = process.env.NODE_ENV === 'production'

const config = {
  mode: isProd ? 'production' : 'development',
  entry: path.join(__dirname, 'demo', 'js', 'demo.js'),
  output: {
    path: path.join(__dirname, 'demo', 'js'),
    filename: 'demo.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}

module.exports = config
