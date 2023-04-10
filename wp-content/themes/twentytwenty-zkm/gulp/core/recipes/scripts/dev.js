const gulp = require("gulp");
const plumber = require("gulp-plumber");
const named = require("vinyl-named");
const webpack = require("webpack");
const gulpWebpack = require("webpack-stream");
const browserSync = require("browser-sync");

// utils
const notify = require("gulp-notify");
const deepMerge = require("../../utils/deepMerge");
const logStats = require("../../utils/webpackLogStats");
const notifaker = require("../../utils/notifaker");
const pumped = require("../../utils/pumped");

// config
const config = require("../../config/scripts");

/**
 * Create JS packages
 * with webpack
 *
 * @returns {*}
 */
module.exports = function () {
  return (
    gulp
      .src(config.paths.src)
      .pipe(plumber())
      .pipe(named()) // vinyl-named is used to allow for
      // multiple entry files
      .pipe(
        gulpWebpack(
          deepMerge(
            config.options.webpack.defaults,
            config.options.webpack.dev
          ),
          webpack,
          (err, stats) => {
            logStats(err, stats);
            // reload browser-sync when
            // a package is updated
            browserSync.reload();
            notifaker(pumped("JS Packaged"));
          }
        )
      )
      .pipe(gulp.dest(config.paths.dest))
  );
};
