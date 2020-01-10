
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, step: 'add'},
        {id: 2, step: 'mix'},
        {id: 3, step: 'cook on medium'}
      ]);
    });
};
