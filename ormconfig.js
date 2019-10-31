// const { EnvService } = require('./env/env.service');
// require('dotenv').config();

// const config = new EnvService().read();

module.exports = {
	name: 'default',
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'postgres',
	database: 'db_api',
	synchronize: true,
	dropSchema: false,
	logging: true,
	entities: [ 'src/**/*.entity.ts' ],
	cli: {
		entitiesDir: 'src/**/*.entity.ts'
	}
};
