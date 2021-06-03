const gulp = require('gulp');

// config
const config = require('../../config/images');

/**
 * Watch image files
 * for changes
 *
 * @param done
 */
module.exports = function(done) {
	gulp.watch(config.paths.watch, gulp.parallel('images:dev'));

	done();
};
