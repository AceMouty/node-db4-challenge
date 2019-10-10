
exports.up = function(knex) {
  return knex.schema.createTable('steps', tbl => {
      tbl.increments()
			tbl.string('step')
				.notNullable()
  })
  .createTable('meals', tbl => {
      tbl.increments()
			tbl.string('meal_name')
				.notNullable()
  })
  .createTable('ingredient', tbl => {
      tbl.increments()
      tbl.string('name')
      .notNullable()
  })
  .createTable('recipes', tbl => {
      tbl.increments()
      tbl.float('quanity')
				.notNullable()
			tbl.string('measurement')
				.notNullable()
			tbl.integer('meal_id')
				.unsigned()
				.notNullable()
    		.references('id')
    		.inTable('meals')
  })
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('recipes')
		.dropTableIfExists('ingredient')
		.dropTableIfExists('meals')
		.dropTableIfExists('steps')
};
