var express = require('express');
var router = express.Router();
var PersonagemController = require("./../controller/PersonagemController");

router.get('/editar', PersonagemController.edit);

router.post('/criar', PersonagemController.criar);
 

module.exports = router;