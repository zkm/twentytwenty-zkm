const gulp = require("gulp");

// config
const config = require("../../config/sprite");

/**
 * Watch svg sprite files
 * for changes
 *
 * @param done
 */
module.exports = function (done) {
  gulp.watch(config.paths.watch, gulp.parallel("sprite:dev"));

  done();
};
