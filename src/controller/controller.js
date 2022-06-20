let pokemon = require('../models/pokemons.json');
const fs = require('fs');
const path = require('path');

const controller ={
    listar: (req, res)=>{
        res.render("pokeListar", {pokemon})
    },

    detalle: (req, res) =>{
        let id = req.params.id;
        let pokemonDetail = pokemon.find((item)=>item.national_number ==id);
        res.render("pokeDetalle", {pokemonDetail});
    },

    delete: (req, res)=>{
        let id = req.params.id; //se captura el id 
        pokemon = pokemon.filter((item)=> item.national_number != id) //se filtra el json menos el id

        fs.writeFileSync(
            path.join(__dirname, "../models/pokemons.json"),
            JSON.stringify(pokemon, null, 4),
            {
                encoding: "utf-8"
            }
        );

        res.render('./pokelistar', {pokemon})
    }
}

module.exports = controller;