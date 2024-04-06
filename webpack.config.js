const path = require('path');

module.exports = {
  entry: './src/index.js', // Specify the entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Specify the output directory
    filename: 'bundle.js', // Specify the output file name
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match both .js and .jsx files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: 'babel-loader', // Use babel-loader for transpiling JSX code
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Use presets for compiling JavaScript and React
          },
        },
      },
    ],
  },
};
