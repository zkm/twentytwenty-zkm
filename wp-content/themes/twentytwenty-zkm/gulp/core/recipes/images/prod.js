const gulp = require('gulp');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');

// utils
const pumped = require('../../utils/pumped');

// config
const config = require('../../config/images');

/**
 * Compress Images and
 * move them to the
 * built theme
 *
 */
module.exports = function() {
	return gulp
		.src(config.paths.src)
		.pipe(plumber())
		.pipe(
			imagemin({
				progressive: true,
				interlaced: true
			})
		)
		.pipe(gulp.dest(config.paths.dest))
		.pipe(
			notify({
				message: pumped('Images Compressed'),
				onLast: true
			})
		);
};
