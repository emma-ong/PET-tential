/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('reviews').del()
  await knex('reviews').insert([
    {id: 1, name: 'K.D Lang', post: 'Having to rehome Bubz was already painful enough, but PET-tential made the process really seamless!'},
    {id: 2, name: 'Ella Fitzgerald', post: 'I have found my forever fur-rend thanks PET-tential <3'},
    {id: 3, name: 'Otis Redding', post: 'Highly recommend PET-tential'}
  ]);
};
