module.exports = {
  development: {
    client: "pg",
    connection: {
      database: process.env.PUZZLE_DB_NAME || "puzzle",
      host: process.env.PUZZLE_DB_HOST || "localhost",
      password: process.env.PUZZLE_DB_PASSWORD || "puzzle",
      user: process.env.PUZZLE_DB_USER || "puzzle"
    },
    mirgrations: {
      tableName: "puzzle_migrations"
    }
  },
  production: {
    client: "pg",
    connection: {
      database: process.env.PUZZLE_DB_NAME,
      host: process.env.PUZZLE_DB_HOST,
      password: process.env.PUZZLE_DB_PASSWORD,
      user: process.env.PUZZLE_DB_USER
    },
    mirgrations: {
      tableName: "puzzle_migrations"
    }
  }
};
