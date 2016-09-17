/* eslint-env node */
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const html = require("html-webpack-plugin");
const config = require("./webpack.config");

module.exports = Object.assign({}, config, {
  output: {
    path: "dist/",
    filename: "bundle.js",
    publicPath: "/"
  },

  devServer: {
    hot: true,
    inline: true,
    port: 3333,
    historyApiFallback: true
  },

  debug: true,
  devtool: "eval-source-map",

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new html({template: "app/templates/index.ejs", favicon: "app/images/favicon.png"})
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel!eslint?configFile=.eslintrc.development"
      },

      {
        test: /\.scss$/,
        loader: "style!css!postcss!resolve-url!sass?outputStyle=expanded"
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file"
      }
    ]
  },

  postcss: [
    autoprefixer({browsers: ["last 2 versions"]})
  ]
});
