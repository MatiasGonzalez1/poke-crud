let pokemon = require('../models/pokemons.json');

const controller ={
    listar: (req, res)=>{
        res.render("pokeListar", {pokemon})
    },

    detalle: (req, res) =>{
        let id = req.params.id;
        let pokemonDetail = pokemon.find((item)=>item.national_number ==id);
        res.render("pokeDetalle", {pokemonDetail});
    }
}

module.exports = controller;