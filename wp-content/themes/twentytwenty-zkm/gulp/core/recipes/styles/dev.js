const gulp = require('gulp');
const filter = require('gulp-filter');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-dart-sass');
const notify = require('gulp-notify');
const browserSync = require('browser-sync');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

// config
const config = require('../../config/styles');

// utils
const pumped = require('../../utils/pumped');

// postcss
const plugins = [autoprefixer(config.options.autoprefixer)];

/**
 * Compile SCSS to CSS,
 * create Sourcemaps
 * and trigger
 * Browser-sync
 *
 *
 */
module.exports = function(cb) {
	const filterCSS = filter('**/*.css', { restore: true });

	return (
		gulp
			.src(config.paths.src)
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(sass.sync(config.options.sass))
			.on('error', function(error) {
				notify().write(error);
				this.emit('end');
			})
			.pipe(postcss(plugins))
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest(config.paths.dest))
			.pipe(filterCSS) // sourcemaps adds `.map` files to the gulp
			// stream, but we only want to trigger
			// Browser-sync on CSS files so we need to
			// filter the stream for the css files
			.pipe(browserSync.reload({ stream: true }))
			.pipe(filterCSS.restore)
			.pipe(
				notify({
					message: pumped('Your SCSS is Compiled.'),
					onLast: true
				})
			)
	);
};
