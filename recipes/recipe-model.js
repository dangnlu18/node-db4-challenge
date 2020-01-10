const db = require('../dbconfig')


function getRecipes(){
    return db('recipes')

}

function getShoppingList(recipe_id){
    return db('shopping_list').where({recipe_id})

}

function getInstructions(recipe_id){
    return db('recipe_ingredient').where({recipe_id})
}



// function findById(id){
//     return db('schemes').where({ id }).first()
// }

// function findSteps(){
//     return db('steps').join('schemes', 'steps.scheme_id', 'schemes.id').orderBy('steps.id').select("steps.id", "schemes.scheme_name", "steps.instructions")
// }

// function add(payload){
//     return db('schemes').insert(payload)
// }

// function update(payload, id){
//     return db('schemes').where("id", id).update(payload)
// }

// function remove(id){
//     return db('schemes').where("id", id).del()
// }


module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}





