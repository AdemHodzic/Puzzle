const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const rules = [
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
];

const plugins = [new VueLoaderPlugin()];

const resolve = {
  alias: {
    api: path.resolve(__dirname, "src/api"),
    components: path.resolve(__dirname, "src/components"),
    db: path.resolve(__dirname, "src/db"),
    factories: path.resolve(__dirname, "src/factories"),
    models: path.resolve(__dirname, "src/models"),
    routes: path.resolve(__dirname, "src/routes"),
    server: path.resolve(__dirname, "src/server"),
    utils: path.resolve(__dirname, "src/utils"),
    views: path.resolve(__dirname, "src/views"),
    vue$: "vue/dist/vue.esm.js"
  },
  extensions: [".js", ".json", ".vue"]
};

// "development" or "production"
const mode = "development";

module.exports = [
  // client config
  {
    target: "web",
    entry: {
      admin: path.resolve(__dirname, "src/client/admin")
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist/js")
    },
    module: { rules },
    mode,
    plugins,
    resolve
  },
  //server config
  {
    target: "node",
    entry: {
      index: path.resolve(__dirname, "src/index.js")
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist"),
      libraryTarget: "commonjs2"
    },
    externals: {
      knex: "commonjs knex"
    },
    module: { rules },
    mode,
    plugins,
    resolve
  }
];
