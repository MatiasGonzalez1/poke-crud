const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

//listar pokemones
router.get("/", controller.listar)


//detalle pokemon

router.get("/editar/:id", controller.detalle);
//actualizar pokemones

//borrar pokemones

//crear pokemones

module.exports = router;