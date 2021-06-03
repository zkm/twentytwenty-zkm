const notifier = require('node-notifier');
const log = require('fancy-log');
const c = require('ansi-colors');

/**
 * Fake the gulp-notfy functionality
 * to provide a consistent interface
 * for non-stream notifications
 *
 * @param message
 */
module.exports = function(message) {
	log(c.cyan('gulp-notifier'), `[${c.blue('Gulp notification')}]`, c.green(message));

	notifier.notify({
		title: 'Gulp notification',
		message,
		onLast: true
	});
};
