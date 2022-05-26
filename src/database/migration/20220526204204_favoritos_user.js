/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("favoritos_user", function (table) {
        table.integer("produto_id").notNullable;
        table
          .foreign("produto_id")
          .references("produto_id")
          .inTable("produto")
          .onDelete("cascade")
        table.string("user_id").notNullable;
        table
         .foreign("user_id")
         .references("user_id")
         .inTable("user")
         .onDelete("cascade")
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("favoritos_user");
};
