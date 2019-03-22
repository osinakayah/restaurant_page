const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyPlugin([
      { from: 'src/css', to: path.resolve(__dirname, 'dist') },
      { from: 'src/index.html', to: path.resolve(__dirname, 'dist') },
    ]),
  ],
  entry: path.resolve(__dirname, 'src/js/index.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }

};
