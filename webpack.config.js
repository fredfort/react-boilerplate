const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['react-hot-loader/patch', './src/index.jsx'],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        loaders: [
          'style-loader?sourceMap',
          {
            loader: 'css-loader', options: { modules: true, importLoaders: 1, localIdentName: '[name]_[local]_[hash:base64:5]' },
          },
          'sass-loader',
        ],
      },
      { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    host: '0.0.0.0',
    contentBase: './',
  },
};
