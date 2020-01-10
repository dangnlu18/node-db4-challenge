
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Spaghetti'},
        {id: 2, name: 'Red Velvet Cake'},
        {id: 3, name: 'Braised Short Ribs'}
      ]);
    });
};
