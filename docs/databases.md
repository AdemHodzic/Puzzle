The database is configured using environment variables, optionally during
development a`.env` file can be added to the root directory with the
configuration.

Only two databases are supported: Postgres and SQLite3. The variable `DB_CLIENT`
specifies which database should be used: `pg` for Postgres, and `sqlite3` for
SQLite. If no configuration is found Puzzle will use sqlite by default.

Below is the default configuration for each database.

# Postgres

``` bash
# .env
DB_CLIENT=pg
DB_HOST=localhost
DB_PASSWORD=puzzle
DB_NAME=puzzle
DB_USER=puzzle
```

# Sqlite

```bash
# .env
DB_CLIENT=sqlite3
DB_NAME=db.sqlite
```
