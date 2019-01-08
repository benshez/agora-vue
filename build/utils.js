'use strict';

function getExtensions(platform) {
	return [ 'ts', 'js', 'css', 'scss', 'vue' ].reduce((exts, ext) => {
		exts.push(`.${platform}.${ext}`);
		if (platformIsNative(platform)) exts.push(`.native.${ext}`);
		exts.push(`.${ext}`);
		return exts;
	}, []);
}

function platformIsNative(platform) {
	return [ 'ios', 'android' ].includes(platform);
}

module.exports = {
	getExtensions: getExtensions,
	platformIsNative: platformIsNative
};

const PLATFORM = 'web';
const PROJECT_ROOT = resolve(__dirname, '../..');
const APP_FULL_PATH = resolve(PROJECT_ROOT, 'app');
const APP_RESOURCES_FULL_PATH = resolve(APP_FULL_PATH, `App_Resources${sep}${PLATFORM}`);
const DISTRIBUTABLE_FULL_PATH = resolve(PROJECT_ROOT, `platforms${sep}${PLATFORM}`);
