
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'cheese'},
        {name: 'beef patty'},
        {name: 'hamburger bun'},
        {name: 'tortilla chips'},
        {name: 'jalepenos'},
        {name: 'hot dog bun'},
        {name: 'hot dog'},
      ]);
    });
};
