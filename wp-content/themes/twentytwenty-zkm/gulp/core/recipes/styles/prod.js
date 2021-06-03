const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-dart-sass');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const notify = require('gulp-notify');

// utils
const pumped = require('../../utils/pumped');

// config
const config = require('../../config/styles');

const plugins = [autoprefixer(config.options.autoprefixer), cssnano(config.options.minify)];

/**
 * Compile SCSS to CSS
 * and Minify
 *
 */
module.exports = function() {
	return gulp
		.src(config.paths.src)
		.pipe(plumber())
		.pipe(sass.sync(config.options.sass).on('error', sass.logError))
		.pipe(postcss(plugins))
		.pipe(gulp.dest(config.paths.dest))
		.pipe(
			notify({
				message: pumped('SCSS Compiled & Minified.'),
				onLast: true
			})
		);
};
