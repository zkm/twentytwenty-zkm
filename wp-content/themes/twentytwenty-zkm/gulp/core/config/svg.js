// utils
const deepMerge = require('../utils/deepMerge');

// config
const { assets } = require('./common').paths;

/**
 * Svg Building
 * Configuration
 * Object
 *
 * @type {{}}
 */
module.exports = deepMerge({
	paths: {
		watch: [`${assets.src}/svg/**/*.svg`, `!${assets.src}/svg/sprite/**/*.svg`],
		src: [`${assets.src}/svg/**/*.svg`, `!${assets.src}/svg/sprite/**/*.svg`],
		dest: `${assets.dest}/svg`,
		clean: [`${assets.dest}/svg/**/*.svg`, `!${assets.dest}/svg/sprite-*.svg`]
	},

	options: {
		svgmin: { multipass: true }
	}
});
