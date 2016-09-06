const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  externals: [nodeExternals()],

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
};
