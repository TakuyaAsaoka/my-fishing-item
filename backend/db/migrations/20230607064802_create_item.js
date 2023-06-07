/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('item', function (table) {
    table.increments('id').primary();
    table.string('name', 32).notNullable();
    table.integer('quantity').notNullable();
    table.integer('category_id').notNullable();
    table.foreign('category_id').references('id').inTable('category');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('item');
};
