
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('shopping_list').del()
    .then(function () {
      // Inserts seed entries
      return knex('shopping_list').insert([
        {recipe_id: 1, ingredient_id: '1', qty: 2},
        {recipe_id: 2, ingredient_id: '2', qty: 4},
        {recipe_id: 1, ingredient_id: '2', qty: 6}
      ]);
    });
};
