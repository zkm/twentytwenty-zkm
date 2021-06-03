const gulp = require('gulp');

// config
const config = require('../../config/fonts');

/**
 * Watch font files
 * for changes
 *
 * @param done
 */
module.exports = function(done) {
	gulp.watch(config.paths.watch, gulp.parallel('fonts:dev'));

	done();
};
