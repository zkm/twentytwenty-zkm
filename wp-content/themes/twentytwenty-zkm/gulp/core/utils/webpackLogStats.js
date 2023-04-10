const log = require("fancy-log");
const supportsColor = require("supports-color");

let callingDone = false;
const defaultStatsOptions = {
  colors: supportsColor,
  hash: false,
  timings: false,
  chunks: false,
  chunkModules: false,
  modules: false,
  children: true,
  version: true,
  cached: false,
  cachedAssets: false,
  reasons: false,
  source: false,
  errorDetails: false,
};

/**
 * Output stats to console for webpack
 *
 * @param err
 * @param stats
 * @param options
 */
module.exports = function (err, stats, options) {
  stats = stats || {};
  options = options || {};

  if (options.quiet || callingDone) {
    return;
  }

  // Debounce output a little for when in watch mode
  if (options.watch) {
    callingDone = true;
    setTimeout(() => {
      callingDone = false;
    }, 500);
  }

  if (options.verbose) {
    log(
      stats.toString({
        colors: supportsColor,
      })
    );
  } else {
    const statsOptions = (options && options.stats) || {};

    Object.keys(defaultStatsOptions).forEach((key) => {
      if (typeof statsOptions[key] === "undefined") {
        statsOptions[key] = defaultStatsOptions[key];
      }
    });

    log(stats.toString(statsOptions));
  }
};
