/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('azing').del();
  await knex('azing').insert([
    { item_id: 4, quantity: 1 },
    { item_id: 5, quantity: 1 },
    { item_id: 6, quantity: 1 },
    { item_id: 7, quantity: 1 },
    { item_id: 8, quantity: 1 },
    { item_id: 9, quantity: 1 },
    { item_id: 10, quantity: 1 },
  ]);
};
