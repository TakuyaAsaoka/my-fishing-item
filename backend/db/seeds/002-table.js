/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('table').del();
  await knex('table').insert([
    { id: 1, name: 'tairaba' },
    { id: 2, name: 'azing' },
    { id: 3, name: 'rikukara' },
  ]);
};
