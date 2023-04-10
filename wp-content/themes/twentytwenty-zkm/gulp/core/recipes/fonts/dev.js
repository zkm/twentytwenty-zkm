const gulp = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const browserSync = require("browser-sync");

// utils
const pumped = require("../../utils/pumped");

// config
const config = require("../../config/fonts");

/**
 * Move Fonts to
 * the built theme
 *
 */
module.exports = function () {
  return gulp
    .src(config.paths.src)
    .pipe(plumber())
    .pipe(gulp.dest(config.paths.dest))
    .pipe(
      notify({
        message: pumped("Fonts Moved"),
        onLast: true,
      })
    )
    .on("end", browserSync.reload);
};
