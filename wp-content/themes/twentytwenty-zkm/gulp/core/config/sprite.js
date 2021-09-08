// utils
const deepMerge = require('../utils/deepMerge');

// config
const { assets } = require('./common').paths;

/**
 * Svg Sprite Building
 * Configuration
 * Object
 *
 * @type {{}}
 */
module.exports = deepMerge({
	paths: {
		watch: `${assets.src}/svg/sprite/**/*.svg`,
		src: `${assets.src}/svg/sprite`,
		dest: `${assets.dest}/svg`,
		clean: `${assets.dest}/svg/sprite-*.svg`
	},

	options: {
		svgmin: {
			multipass: true,
			plugins: [{ cleanupIDs: false }, { removeAttrs: { attrs: 'fill' } }]
		},
		svgSprite(name) {
			return {
				mode: {
					inline: true,
					symbol: {
						dest: '.',
						sprite: `sprite-${name}.svg`
					}
				},
				shape: {
					id: {
						generator: 'icon-%s'
					}
				}
			};
		}
	}
});
