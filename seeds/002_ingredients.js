
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'beef'},
        {id: 2, name: 'eggs'},
        {id: 3, name: 'flour'}
      ]);
    });
};
