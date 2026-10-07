const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [new MiniCssExtractPlugin({
    filename: 'frontend.css',
  })],
  cache: {
    type: 'filesystem',
  },
  entry: './app.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [
            /node_modules/
        ],
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource'
      },
      // {
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader"],
      // },
      {
        test: /\.py$/,
        type: 'asset/source'
      },
      {
        test: /\.html$/i,
        type: 'asset/source',
        exclude: [/node_modules/],
      }
    ],
    noParse: /typescript/
  },
  devtool: 'source-map',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    library: 'frontend',
    libraryTarget: 'var',
    filename: 'frontend.js',
    path: path.resolve(__dirname, '../static/libs/blockpy_server/'),
  },
  externals: {
    knockout: 'ko',
    select2: 'select2',
    "highlight.js": 'hljs',
    jquery: "jQuery",
    "$URL_ROOT": "$URL_ROOT",
    codemirror: 'CodeMirror',
    filepond: 'FilePond',
    browserfs: 'BrowserFS',
    doppiojvm: "Doppio",
    ConTodo: "ConTodo",
    raw_kettle_compiler_dts: "RAW_D_TS_FILES",
    skulpt: "Sk",
  }
};