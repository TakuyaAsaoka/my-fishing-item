/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tairaba').del();
  await knex('tairaba').insert([
    { item_id: 1, quantity: 1 },
    { item_id: 2, quantity: 1 },
    { item_id: 3, quantity: 1 },
  ]);
};
