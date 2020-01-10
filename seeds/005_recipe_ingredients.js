
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: '2', instruction_id: 1, qty: 3},
        {recipe_id: 2, ingredient_id: '2', instruction_id: 1, qty: 4},
        {recipe_id: 1, ingredient_id: '1', instruction_id: 2, qty: 5}
      ]);
    });
};
