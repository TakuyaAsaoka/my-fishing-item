/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('rikukara').del();
  await knex('rikukara').insert([
    { item_id: 7, quantity: 1 },
    { item_id: 8, quantity: 1 },
    { item_id: 9, quantity: 1 },
  ]);
};
