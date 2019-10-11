
exports.up = function(knex) {
  return knex.schema.createTable('steps', tbl => {
    tbl.increments()
    tbl.integer('recipe_id', 6)
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('recipes')
    tbl.integer('stepNum', 6)
      .notNullable()
      .unsigned()
    tbl.string('desc', 255)
      .notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('steps')
};
