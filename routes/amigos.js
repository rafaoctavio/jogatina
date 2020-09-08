var express = require('express');
var router = express.Router();
var amigosController = require("../controller/amigosController");

router.get('/', amigosController.index);

 

module.exports = router;
