export default ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'strapi'),
			user: env('DATABASE_USERNAME', 'strapi'),
			password: env('DATABASE_PASSWORD', 'd3v123!23'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
