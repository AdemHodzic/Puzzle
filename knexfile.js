module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: 'db.sqlite',
    },
    mirgrations: {
      tableName: 'puzzle_migrations',
    },
  },
  production: {
    client: 'pg',
    connection: {
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      user: process.env.DB_USER,
    },
    mirgrations: {
      tableName: 'puzzle_migrations',
    },
  },
}
