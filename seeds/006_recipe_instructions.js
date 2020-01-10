
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_instructions').insert([
        {id: 1, instruction_id: 1},
        {id: 2, instruction_id: 2},
        {id: 3, instruction_id: 3}
      ]);
    });
};
