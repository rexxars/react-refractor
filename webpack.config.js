const isProd = process.env.NODE_ENV === 'production'

const config = {
  mode: isProd ? 'production' : 'development',
  output: {
    library: 'reactRefractor',
    libraryTarget: 'umd'
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react'
    }
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
