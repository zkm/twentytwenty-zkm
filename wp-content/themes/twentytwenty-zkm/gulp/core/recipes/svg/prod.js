const gulp = require("gulp");
const plumber = require("gulp-plumber");
const svgmin = require("gulp-svgmin");
const notify = require("gulp-notify");

// utils
const pumped = require("../../utils/pumped");

// config
const config = require("../../config/svg");

/**
 * Compress Svgs and
 * move them to the
 * built theme
 *
 */
module.exports = function () {
  return gulp
    .src(config.paths.src)
    .pipe(plumber())
    .pipe(svgmin(config.options.svgmin))
    .pipe(gulp.dest(config.paths.dest))
    .pipe(
      notify({
        message: pumped("Svgs Compressed"),
        onLast: true,
      })
    );
};
