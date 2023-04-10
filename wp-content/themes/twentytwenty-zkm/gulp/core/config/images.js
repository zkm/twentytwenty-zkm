// utils
const deepMerge = require("../utils/deepMerge");

// config
const { assets } = require("./common").paths;

/**
 * Image Building
 * Configuration
 * Object
 *
 * @type {{}}
 */
module.exports = deepMerge({
  paths: {
    watch: [
      `${assets.src}/img/**/*.{gif,ico,jpg,jpeg,png,webp}`,
      `!${assets.src}/img/sprites`,
    ],
    src: [
      `${assets.src}/img/**/*.{gif,ico,jpg,jpeg,png,webp}`,
      `!${assets.src}/img/sprites`,
    ],
    dest: `${assets.dest}/img`,
    clean: `${assets.dest}/img/**/*.{gif,ico,jpg,jpeg,png,webp}`,
  },
});
