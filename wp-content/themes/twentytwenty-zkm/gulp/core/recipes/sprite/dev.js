const gulp = require("gulp");
const plumber = require("gulp-plumber");
const svgSprite = require("gulp-svg-sprite");
const svgmin = require("gulp-svgmin");
const log = require("fancy-log");
const path = require("path");
const mergeStream = require("merge-stream");
const notify = require("gulp-notify");
const browserSync = require("browser-sync");

// utils
const getFolders = require("../../utils/getFolders");
const pumped = require("../../utils/pumped");

// config
const config = require("../../config/sprite");

/**
 * Create single svg sprite given
 * a name and a src pattern
 *
 * @param name
 * @param src
 * @returns {*}
 */
function spriteTask(name, src) {
  return gulp
    .src(src)
    .pipe(plumber())
    .pipe(svgSprite(config.options.svgSprite(name)))
    .on("error", (error) => {
      notify({
        message: "Error on Sprite creation",
      });
      log.error(error);
    })
    .pipe(svgmin(config.options.svgmin))
    .pipe(gulp.dest(config.paths.dest));
}

/**
 * Create Sprite from individual
 * svg files to be <use>d in
 * templates
 *
 */
module.exports = function () {
  const subDirs = getFolders(config.paths.src).map((folder) =>
    spriteTask(folder, path.join(config.paths.src, folder, "/**/*.svg"))
  );

  const root = spriteTask("default", path.join(config.paths.src, "/*.svg"));

  return mergeStream(subDirs, root)
    .pipe(
      notify({
        message: pumped("Svg Sprites Generated"),
        onLast: true,
      })
    )
    .on("end", browserSync.reload);
};
