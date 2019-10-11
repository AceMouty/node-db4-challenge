
exports.up = function(knex) {
  return knex.schema.createTable('recipes', tbl => {
      tbl.increments()
			tbl.string('recipe', 255)
				.notNullable()
  })
  .createTable('ingredients', tbl => {
      tbl.increments()
			tbl.string('name', 255)
				.notNullable()
  })
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('recipes')
		.dropTableIfExists('ingredients')
};
