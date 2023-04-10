// utils
const deepMerge = require("../utils/deepMerge");

// config
const { assets } = require("./common").paths;

/**
 * Font Building
 * Configuration
 * Object
 *
 * @type {{}}
 */
module.exports = deepMerge({
  paths: {
    watch: `${assets.src}/fonts/**/*.{eot,otf,ttf,woff,woff2,svg}`,
    src: `${assets.src}/fonts/**/*.{eot,otf,ttf,woff,woff2,svg}`,
    dest: `${assets.dest}/fonts`,
    clean: `${assets.dest}/fonts/**/*.{eot,otf,ttf,woff,woff2,svg}`,
  },
});
