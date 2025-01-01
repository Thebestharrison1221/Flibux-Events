// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js', // Path to your entry file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Output file name
  },
  mode: 'production' // Or 'development' depending on your environment
};
