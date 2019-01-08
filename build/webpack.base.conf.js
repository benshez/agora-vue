const { platformWeb, Utilities } = require('./environments/base.config');
const platform = platformWeb();
const utils = new Utilities(platform);

utils.report('info', `Starting build process using ${platform}`);

module.exports = require(utils.getBuildFile());
