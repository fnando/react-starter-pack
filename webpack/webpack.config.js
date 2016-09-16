/* eslint-env node */
/* eslint-disable no-console */
process.env.NODE_ENV = process.env.NODE_ENV || "development";
const config = require(`./webpack.${process.env.NODE_ENV}.js`);

console.log(`=> Running webpack for ${process.env.NODE_ENV}.\n`);

module.exports = Object.assign({}, {
  target: "web",
  entry: "./app/main.jsx",
  resolve: {extensions: ["", ".js", ".jsx"]}
}, config);
