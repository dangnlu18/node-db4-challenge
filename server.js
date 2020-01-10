const express = require('express');

const recipeRouter= require('./recipes/recipe-router.js');

const server = express();

server.use(express.json());
server.use('/api/recipes', recipeRouter);

server.use((err, req, res, next)=>{
    console.log(err)
    res.status(500).json({message:'something went wrong'})
})


module.exports = server;