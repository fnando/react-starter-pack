/* eslint-env node */
module.exports = {
  target: "web",
  entry: "./app/main.jsx",
  resolve: {
    modulesDirectories: [process.cwd(), "node_modules"],
    extensions: ["", ".js", ".jsx"]
  },
};
