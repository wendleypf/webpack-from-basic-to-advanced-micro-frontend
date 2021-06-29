/**
 * @author wendleypf <wendleypf@gmail.com>
 */
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ttf|woff2|woff)$/,
        use: 'url-loader'
      }
    ]
  }
}
