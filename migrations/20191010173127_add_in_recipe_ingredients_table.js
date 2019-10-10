
exports.up = function(knex) {
  return knex.schema.createTable('recipe_ingredient', tbl => {
    tbl.increments()
    tbl.integer('ingredient_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('ingredient')
    tbl.integer('recipe_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('recipes')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExitst('recipe_ingredient')
};
