exports.up = function(knex, Promise) {
  return (
    knex.schema
      // User
      .createTable("puzzle_user", function(table) {
        table.increments("id");
        table
          .string("email", 254)
          .notNullable()
          .unique();
        table.string("password_hash", 60);
        table.json("permissions");
        table
          .string("username", 30)
          .notNullable()
          .unique();
      })
      // User profile
      .createTable("user_profile", function(table) {
        table.increments("id");
        table.string("bio", 2000);
        table.string("first_name", 30);
        table.string("last_name", 30);
        table.string("photo", 2048);
        table
          .integer("user_id")
          .unsigned()
          .notNullable();
        table
          .foreign("user_id")
          .onDelete("CASCADE")
          .references("id")
          .inTable("puzzle_user");
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
          .integer("parent_id")
          .unsigned()
          .nullable();
        table.string("route", 2048).unique();
        table.string("title", 40);
        table
          .foreign("parent_id")
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
          .integer("page_id")
          .unsigned()
          .notNullable();
        table
          .integer("parent_id")
          .unsigned()
          .nullable();
        table.string("route", 2048).unique();
        table.timestamp("timestamp", { useTz: true }).defaultTo(knex.fn.now());
        table.string("title", 40);
        table
          .integer("user_id")
          .unsigned()
          .nullable();
        table
          .foreign("page_id")
          .onDelete("CASCADE")
          .references("id")
          .inTable("page");
        table
          .foreign("parent_id")
          .onDelete("SET NULL")
          .references("id")
          .inTable("page");
        table
          .foreign("user_id")
          .onDelete("SET NULL")
          .references("id")
          .inTable("puzzle_user");
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
          .integer("model_id")
          .unsigned()
          .notNullable();
        table.string("name");
        table.timestamp("timestamp", { useTz: true }).defaultTo(knex.fn.now());
        table.integer("user_id").unsigned();
        table
          .foreign("model_id")
          .onDelete("CASCADE")
          .references("id")
          .inTable("model");
        table
          .foreign("user_id")
          .onDelete("SET NULL")
          .references("id")
          .inTable("puzzle_user");
      })
      // Entry
      .createTable("entry", function(table) {
        table.increments("id");
        table.integer("author_id").unsigned();
        table.json("data");
        table.string("image", 2048);
        table
          .timestamp("modified_at", { useTz: true })
          .defaultTo(knex.fn.now());
        table
          .integer("model_id")
          .unsigned()
          .notNullable();
        table.timestamp("published_at", { useTz: true });
        table.string("slug");
        table.string("summary", 300);
        table.string("title", 40);
        table
          .foreign("author_id")
          .onDelete("SET NULL")
          .references("id")
          .inTable("puzzle_user");
        table
          .foreign("model_id")
          .onDelete("CASCADE")
          .references("id")
          .inTable("model");
      })
      // Entry history
      .createTable("entry_history", function(table) {
        table.increments("id");
        table.integer("author_id").unsigned();
        table.json("data");
        table
          .integer("entry_id")
          .unsigned()
          .notNullable();
        table.string("image", 2048);
        table
          .timestamp("modified_at", { useTz: true })
          .defaultTo(knex.fn.now());
        table
          .integer("model_id")
          .unsigned()
          .notNullable();
        table.timestamp("published_at", { useTz: true });
        table.string("slug");
        table.string("summary", 300);
        table.timestamp("timestamp", { useTz: true }).defaultTo(knex.fn.now());
        table.string("title", 40);
        table
          .foreign("author_id")
          .onDelete("SET NULL")
          .references("id")
          .inTable("puzzle_user");
        table
          .foreign("entry_id")
          .onDelete("CASCADE")
          .references("id")
          .inTable("entry");
        table
          .foreign("model_id")
          .onDelete("CASCADE")
          .references("id")
          .inTable("model");
      })
      // Block
      .createTable("block", function(table) {
        table.increments("id");
        table.json("data");
        table.integer("model_id").unsigned();
        table.string("name");
        table
          .foreign("model_id")
          .onDelete("CASCADE")
          .references("id")
          .inTable("model");
      })
      // Block history
      .createTable("block_history", function(table) {
        table.increments("id");
        table
          .integer("block_id")
          .unsigned()
          .notNullable();
        table.json("data");
        table.integer("model_id").unsigned();
        table.string("name");
        table.timestamp("timestamp", { useTz: true }).defaultTo(knex.fn.now());
        table.integer("user_id").unsigned();
        table
          .foreign("block_id")
          .onDelete("CASCADE")
          .references("id")
          .inTable("block");
        table
          .foreign("model_id")
          .onDelete("CASCADE")
          .references("id")
          .inTable("model");
        table
          .foreign("user_id")
          .onDelete("SET NULL")
          .references("id")
          .inTable("puzzle_user");
      })
  );
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable("site")
    .dropTable("page_history")
    .dropTable("page")
    .dropTable("block_history")
    .dropTable("block")
    .dropTable("entry_history")
    .dropTable("entry")
    .dropTable("model_history")
    .dropTable("model")
    .dropTable("user_profile")
    .dropTable("puzzle_user");
};
