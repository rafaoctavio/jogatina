var express = require('express');
var router = express.Router();
var cadastroController = require("../controller/cadastroController");

router.get('/', cadastroController.index);

router.post('/', cadastroController.criar);

 

module.exports = router;

