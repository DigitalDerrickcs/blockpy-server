const path = require('path');

module.exports = {
  entry: './app.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'frontend.js',
    path: path.resolve(__dirname, '../static/gen/'),
  },
  externals: {
    knockout: 'ko',
    jquery: "jQuery"
  }
};