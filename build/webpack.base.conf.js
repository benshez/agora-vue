const { platformWeb, Utilities } = require('./base.config');
const platform = platformWeb();
const utils = new Utilities(platform);

utils.report('info', `Starting build process using ${platform}`);

module.exports = require(utils.getBuildFile());
