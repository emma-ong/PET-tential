/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('pets', (table) => {
    table.increments('id').primary()
    table.integer('name')
    table.integer('mobile')
    table.string('description')
    table.string('img')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('pets')
    
};
