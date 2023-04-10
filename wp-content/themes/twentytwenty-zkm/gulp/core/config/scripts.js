const path = require("path");
const { webpack } = require("webpack-stream");
const TerserPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

// utils
const deepMerge = require("../utils/deepMerge");

// config
const { assets } = require("./common").paths;

/**
 * Script Building
 * Configuration
 * Object
 *
 * @type {{}}
 */
module.exports = deepMerge({
  paths: {
    watch: `${assets.src}/js/**/*.js`,
    src: [`${assets.src}/js/*.js`, `!${assets.src}/js/**/_*`],
    dest: `${assets.dest}/js`,
    clean: `${assets.dest}/js/**/*.{js,map}`,
  },

  options: {
    webpack: {
      // merged with defaults
      // for :watch task
      watch: {
        mode: "development",
        cache: true,
        watch: true,
        devtool: "eval",
      },

      // merged with defaults
      // for :dev task
      dev: {
        mode: "development",
        devtool: "eval",
      },

      // merged with defaults
      // for :prod task
      prod: {
        mode: "production",
        optimization: {
          minimize: true,
          minimizer: [
            new TerserPlugin({
              terserOptions: {
                output: {
                  comments: false,
                },
              },
              extractComments: false,
            }),
          ],
        },
      },

      defaults: {
        resolve: {
          extensions: [".js", ".jsx"],
        },
        output: {
          chunkFilename: "chunk-[name].js",
        },
        stats: {
          colors: true,
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
                plugins: [
                  "@babel/plugin-transform-runtime",
                  "@babel/plugin-transform-modules-commonjs",
                ],
              },
            },
          ],
        },
        plugins: [
          new ESLintPlugin(),
          new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
          }),
        ],
      },
    },
  },
});
