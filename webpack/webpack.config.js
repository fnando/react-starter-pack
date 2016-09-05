process.env.NODE_ENV = process.env.NODE_ENV || "development";
const config = require(`./webpack.${process.env.NODE_ENV}.js`);

module.exports = Object.assign({}, {
  target: "web",
  entry: "./app/main.jsx",
  resolve: {extensions: ["", ".js", ".jsx"]}
}, config);
