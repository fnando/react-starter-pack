const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const manifest = require("webpack-assets-manifest");
const extractText = require("extract-text-webpack-plugin");
const html = require("html-webpack-plugin");

module.exports = {
  devtool: "#source-map",
  bail: true,
  debug: false,

  output: {
    path: "./dist/",
    filename: "bundle-[hash].js",
    publicPath: "/"
  },

  plugins: [
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
        loader: "babel-loader"
      },

      {
        test: /\.scss$/,
        loader: extractText.extract("style-loader", "css!postcss!resolve-url!sass?outputStyle=compressed")
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
};
