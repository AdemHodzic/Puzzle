exports.up = function(knex, Promise) {
  return (
    knex.schema
      // User
      .createTable("user", function(table) {
        table.increments("id");
        table
          .string("email", 254)
          .notNullable()
          .unique();
        table.string("password_hash", 60);
        table.json("permissions");
        table
          .string("username")
          .notNullable()
          .unique();
      })
      // User profile
      .createTable("user_profile", function(table) {
        table.increments("id");
        table.string("bio", 2000);
        table.string("first_name");
        table.string("last_name");
        table.string("photo", 2048);
        table
          .integer("user")
          .unsigned()
          .notNullable();
        table
          .foreign("user")
          .onDelete("CASCADE")
          .references("id")
          .inTable("user");
      })
      // Site
      .createTable("site", function(table) {
        table.increments("id");
        table.string("description", 100);
        table.string("locale", 5);
        table.string("logo", 2048);
        table.string("name", 50);
        table.string("timezone", 5);
      })
      // Page
      .createTable("page", function(table) {
        table.increments("id");
        table.json("data");
        table.string("description", 300);
        table.string("image", 2048);
        table
          .integer("parent")
          .unsigned()
          .nullable();
        table.string("route", 2048).unique();
        table.string("title", 40);
        table
          .foreign("parent")
          .onDelete("SET NULL")
          .references("id")
          .inTable("page");
      })
      // Page history
      .createTable("page_history", function(table) {
        table.increments("id");
        table.json("data");
        table.string("description", 300);
        table.string("image", 2048);
        table
          .integer("parent")
          .unsigned()
          .nullable();
        table.string("route", 2048).unique();
        table.timestamp("timestamp", { useTz: true }).defaultTo(knex.fn.now());
        table.string("title", 40);
        table
          .integer("user")
          .unsigned()
          .nullable();
        table
          .foreign("parent")
          .onDelete("SET NULL")
          .references("id")
          .inTable("page");
        table
          .foreign("user")
          .onDelete("SET NULL")
          .references("id")
          .inTable("page");
      })
      // Prefab
      .createTable("prefab", function(table) {
        table.increments("id");
        table.json("data");
        table.string("name");
      })
      // Prefab history
      .createTable("prefab_history", function(table) {
        table.increments("id");
        table.json("data");
        table.string("name");
        table
          .integer("prefab")
          .unsigned()
          .notNullable();
        table.timestamp("timestamp", { useTz: true }).defaultTo(knex.fn.now());
        table.integer("user").unsigned();
        table
          .foreign("prefab")
          .onDelete("CASCADE")
          .references("id")
          .inTable("prefab");
        table
          .foreign("user")
          .onDelete("SET NULL")
          .references("id")
          .inTable("user");
      })
      // Model
      .createTable("model", function(table) {
        table.increments("id");
        table.json("data");
        table.string("name");
      })
      // Model history
      .createTable("model_history", function(table) {
        table.increments("id");
        table.json("data");
        table
          .integer("model")
          .unsigned()
          .notNullable();
        table.string("name");
        table.timestamp("timestamp", { useTz: true }).defaultTo(knex.fn.now());
        table.integer("user").unsigned();
        table
          .foreign("model")
          .onDelete("CASCADE")
          .references("id")
          .inTable("model");
        table
          .foreign("user")
          .onDelete("SET NULL")
          .references("id")
          .inTable("user");
      })
      // Entry
      .createTable("entry", function(table) {
        table.increments("id");
        table.integer("author").unsigned();
        table.json("data");
        table.string("image", 2048);
        table
          .timestamp("modified_at", { useTz: true })
          .defaultTo(knex.fn.now());
        table
          .integer("model")
          .unsigned()
          .notNullable();
        table.timestamp("published_at", { useTz: true });
        table.string("slug");
        table.string("summary", 300);
        table.string("title", 40);
        table
          .foreign("author")
          .onDelete("SET NULL")
          .references("id")
          .inTable("user");
        table
          .foreign("model")
          .onDelete("CASCADE")
          .references("id")
          .inTable("model");
      })
      // Entry history
      .createTable("entry_history", function(table) {
        table.increments("id");
        table.integer("author").unsigned();
        table.json("data");
        table
          .integer("entry")
          .unsigned()
          .notNullable();
        table.string("image", 2048);
        table
          .timestamp("modified_at", { useTz: true })
          .defaultTo(knex.fn.now());
        table
          .integer("model")
          .unsigned()
          .notNullable();
        table.timestamp("published_at", { useTz: true });
        table.string("slug");
        table.string("summary", 300);
        table.timestamp("timestamp", { useTz: true }).defaultTo(knex.fn.now());
        table.string("title", 40);
        table
          .foreign("author")
          .onDelete("SET NULL")
          .references("id")
          .inTable("user");
        table
          .foreign("entry")
          .onDelete("CASCADE")
          .references("id")
          .inTable("entry");
        table
          .foreign("model")
          .onDelete("CASCADE")
          .references("id")
          .inTable("model");
      })
      // Layout
      .createTable("layout", function(table) {
        table.increments("id");
        table.json("data");
        table.integer("model").unsigned();
        table.string("name");
        table
          .foreign("model")
          .onDelete("CASCADE")
          .references("id")
          .inTable("model");
      })
      // Layout history
      .createTable("layout_history", function(table) {
        table.increments("id");
        table.json("data");
        table
          .integer("layout")
          .unsigned()
          .notNullable();
        table.integer("model").unsigned();
        table.string("name");
        table.timestamp("timestamp", { useTz: true }).defaultTo(knex.fn.now());
        table.integer("user").unsigned();
        table
          .foreign("layout")
          .onDelete("CASCADE")
          .references("id")
          .inTable("layout");
        table
          .foreign("model")
          .onDelete("CASCADE")
          .references("id")
          .inTable("model");
        table
          .foreign("user")
          .onDelete("SET NULL")
          .references("id")
          .inTable("user");
      })
  );
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable("entry")
    .dropTable("entry_history")
    .dropTable("layout")
    .dropTable("layout_history")
    .dropTable("model")
    .dropTable("model_history")
    .dropTable("page")
    .dropTable("page_history")
    .dropTable("prefab")
    .dropTable("prefab_history")
    .dropTable("site")
    .dropTable("user")
    .dropTable("user_profile");
};
