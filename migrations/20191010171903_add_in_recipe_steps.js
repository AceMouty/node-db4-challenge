
exports.up = function(knex) {
  return knex.schema.createTable('recipe_steps', tbl => {
    tbl.increments()
    tbl.integer('step_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('steps')
    tbl.integer('recipe_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('recipes')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe_steps')
};
