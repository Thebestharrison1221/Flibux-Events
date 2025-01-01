const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point for JavaScript
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Root index.html file
    }),
  ],
};
