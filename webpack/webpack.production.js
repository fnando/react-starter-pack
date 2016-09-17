/* eslint-env node */
const autoprefixer = require("autoprefixer");
const clean = require("clean-webpack-plugin");
const config = require("./webpack.config");
const extractText = require("extract-text-webpack-plugin");
const html = require("html-webpack-plugin");
const manifest = require("webpack-assets-manifest");
const webpack = require("webpack");

module.exports = Object.assign({}, config, {
  devtool: "source-map",
  bail: true,
  debug: false,

  output: {
    path: "dist/",
    filename: "bundle-[hash].js",
    publicPath: "/"
  },

  plugins: [
    new clean(["dist"]),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({output: {comments: false}}),
    new extractText("bundle-[hash].css", {allChunks: true}),
    new html({template: "app/templates/index.ejs", favicon: "app/images/favicon.png"}),
    new manifest({output: "dist/manifest.json", emit: true})
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel!eslint?failOnWarning=true&failOnError=true"
      },

      {
        test: /\.scss$/,
        loader: extractText.extract("style", "css!postcss!resolve-url!sass?outputStyle=compressed")
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file?name=[name]-[hash].[ext]"
      }
    ]
  },

  postcss: [
    autoprefixer({browsers: ["last 2 versions"]})
  ]
});
