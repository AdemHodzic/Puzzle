const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  target: "node",
  entry: {
    index: path.resolve(__dirname, "src/index.js")
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "commonjs2"
  },
  resolve: {
    alias: {
      api: path.resolve(__dirname, "src/api"),
      assets: path.resolve(__dirname, "assets"),
      components: path.resolve(__dirname, "src/components"),
      db: path.resolve(__dirname, "src/db"),
      models: path.resolve(__dirname, "src/models"),
      routes: path.resolve(__dirname, "src/routes"),
      server: path.resolve(__dirname, "src/server"),
      utils: path.resolve(__dirname, "src/utils"),
      views: path.resolve(__dirname, "src/views"),
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
  mode: "development",
  externals: {
    knex: "commonjs knex"
  }
};
