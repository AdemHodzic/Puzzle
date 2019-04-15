const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  target: "node",
  entry: {
    index: path.resolve(__dirname, "index.js")
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs"
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: [".js", ".json", ".vue"]
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  corejs: 3,
                  useBuiltIns: "entry"
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: "vue-loader"
      }
    ]
  },
  mode: "development"
};
