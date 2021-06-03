const del = require('del');

// config
const config = require('../../config/images');


/**
 * Delete all images
 * within the built theme's
 * asset directory
 *
 */
module.exports = function (done) {
	del(config.paths.clean, { force: true })
		.then(() => { done(); });
};
