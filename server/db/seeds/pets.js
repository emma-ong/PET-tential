/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pets').del()
  await knex('pets').insert([
    {id: 1, name: 'Snoop', mobile: 2139905567, description: "Loves high spaces and catnip", img: 'snoop.jpg'},
    {id: 2, name: 'Cardi Barks', mobile: 2139905567, description: "Loves a good butt scratch", img: 'cardi.jpg' },
  ]);
};
