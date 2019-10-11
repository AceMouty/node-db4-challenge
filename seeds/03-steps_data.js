
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 1, stepNum: 1, desc: "Open buns and place beef patty on the bun"},
        {recipe_id: 1, stepNum: 2, desc: "Place chees on the patty and put lonely bun ontop of cheese"},
        {recipe_id: 1, stepNum: 3, desc: "Microwave for 30 sec let sit for one min and enjoy"},
        {recipe_id: 2, stepNum: 1, desc: "Place chips on plate, chees ontop of chips, jalepenos ontop of cheese"},
        {recipe_id: 2, stepNum: 2, desc: "Microwave for one and a hlaf min"},
        {recipe_id: 2, stepNum: 3, desc: "Let sit for one minute and enjoy"}
      ]);
    });
};
