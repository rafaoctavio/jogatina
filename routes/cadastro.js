var express = require('express');
var router = express.Router();
var cadastroController = require("../controller/cadastroController");
var uploadMiddleware = require('../middleware/uploadMiddleware')



router.get('/', cadastroController.index);
router.post('/', uploadMiddleware, cadastroController.criar);
 

module.exports = router;

