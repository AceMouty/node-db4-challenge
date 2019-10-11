const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);


module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

/*
  SELECT *
  FROM recipes
*/

function getRecipes() {
  return db('recipes')
}

/*
  SELECT name, qty
  FROM recipe_ingredients r
  JOIN ingredients i ON r.recipe_id = i.id
  WHERE r.recipe_id = 2
*/

function getShoppingList(id){
  return db('recipe_ingredients as r')
    .select('name', 'qty')
    .join('ingredients as i', 'r.recipe_id', 'i.id')
    .where({'r.recipe_id': id})
}

/*
  SELECT r.recipe, s.stepNum, s."desc"
  FROM steps s
  JOIN recipes r ON s.recipe_id = r.id
  WHERE s.recipe_id = 1
*/

function getInstructions(id){
  return db('steps as s')
    .select('r.recipe', 's.stepNum', 's.desc')
    .join('recipes as r', 's.recipe_id', 'r.id')
    .where({'s.recipe_id': 1})
}

getRecipes()
.then(res => console.table(res))

getShoppingList(1)
.then(res => console.table(res))

getInstructions(2)
.then(res => console.table(res))