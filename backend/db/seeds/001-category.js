/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('category').del();
  await knex('category').insert([
    { id: 1, name: 'rod' },
    { id: 2, name: 'reel' },
    { id: 3, name: 'lure' },
    { id: 4, name: 'float' },
    { id: 5, name: 'weight' },
    { id: 6, name: 'line' },
    { id: 7, name: 'hook' },
    { id: 8, name: 'others' },
  ]);
};
