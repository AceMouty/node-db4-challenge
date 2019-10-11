
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {ingredient_id: 1, recipe_id: 1, qty: 1, measurement:"slice"},
        {ingredient_id: 2, recipe_id: 1, qty: .25, measurement:"lbs."},
        {ingredient_id: 3, recipe_id: 1, qty: 2, measurement: "slice"},
        {ingredient_id: 1, recipe_id: 2, qty: 3, measurement:"slice"},
        {ingredient_id: 4, recipe_id: 2, qty: 2, measurement:"oz"},
        {ingredient_id: 5, recipe_id: 2, qty: .25, measurement: "cup"}

      ]);
    });
};
