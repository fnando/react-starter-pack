/* eslint-env node */
const webpack = require("webpack");
const config = require("./webpack.config");
const nodeExternals = require("webpack-node-externals");

module.exports = Object.assign({}, config, {
  target: "node",
  externals: [nodeExternals()],

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("test")
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel"
      },

      {
        test: /\.scss$/,
        loader: "null"
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "null"
      }
    ]
  }
});
