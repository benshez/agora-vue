const config = {
	development: require('./config/dev.env'),
	production: require('./config/prod.env'),
	test: require('./config/test.env')
};

const TARGET = process.env.NODE_ENV;

module.exports = config[TARGET];
