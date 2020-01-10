
exports.up = async function(knex) {
  await knex.schema.createTable('recipes', (table)=>{
    table.increments('id')
    table.string('name').notNullable()
  })

  await knex.schema.createTable('ingredients', (table)=>{
    table.increments('id')
    table.string('name').notNullable()
  })

  await knex.schema.createTable('instructions', (table)=>{
    table.increments('id')
    table.string('step').notNullable()
  })

  await knex.schema.createTable('shopping_list', (table)=>{
    table.integer('recipe_id')
    .notNullable()
    .references('id')
    .inTable('recipes')
    table.integer('ingredient_id')
        .notNullable()
        .references('id')
        .inTable('ingredients')
    table.float('qty')
        .notNullable()
    table.primary(['recipe_id', 'ingredient_id'])
  })

  await knex.schema.createTable('recipe_ingredients', (table)=>{
    table.integer('recipe_id')
        .notNullable()
        .references('id')
        .inTable('recipes')
    table.integer('ingredient_id')
        .notNullable()
        .references('id')
        .inTable('ingredients')
    table.integer('instruction_id')
        .notNullable()
        .references('id')
        .inTable('instructions')
    table.float('qty')
        .notNullable()
    table.primary(['recipe_id', 'ingredient_id'])
  })

  await knex.schema.createTable('recipe_instructions', (table)=>{
    table.increments('id')
    table.integer('instruction_id')
        .notNullable()
        .references('id')
        .inTable('instructions')
  })

};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('recipe_instructions')
  await knex.schema.dropTableIfExists('recipe_ingredients')
  await knex.schema.dropTableIfExists('shopping_list')
  await knex.schema.dropTableIfExists('instructions')
  await knex.schema.dropTableIfExists('ingredients')
  await knex.schema.dropTableIfExists('recipes')
};
