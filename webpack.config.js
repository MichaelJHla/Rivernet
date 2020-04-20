const path = require("path")
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
        main: './src/index.js',
        edit: './src/js/edit.js',
        quality: './src/js/quality.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
    },
  mode: 'development',
  target: 'web',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins 
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            //options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
       test: /\.(png|svg|jpg|gif)$/,
       use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/html/index.html",
        filename: "./index.html",
        //chunks: ['index'], //This shouldn't be here, but I'll keep it anyway.
      excludeChunks: [ 'server' ]
    }),
    new HtmlWebPackPlugin({
      template: "./src/html/edit.html",
        filename: "./edit.html",
        chunks: ['edit'],
      excludeChunks: [ 'server' ]
    }),
    new HtmlWebPackPlugin({
      template: "./src/html/quality.html",
        filename: "./quality.html",
        chunks: ['quality'],
      excludeChunks: [ 'server' ]
    }),
    new webpack.NoEmitOnErrorsPlugin()
    
  ]
}