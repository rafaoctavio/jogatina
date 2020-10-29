var express = require('express');
var router = express.Router();
var PersonagemController = require("./../controller/PersonagemController");

router.get('/editar', PersonagemController.edit);

router.get('/criar', PersonagemController.criar);
 

module.exports = router;