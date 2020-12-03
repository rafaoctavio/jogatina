var express = require('express');
var router = express.Router();
var profileController = require("./../controller/profileController");
var uploadMiddleware = require('../middleware/uploadMiddleware');

router.get('/', profileController.home);

router.get('/:id',uploadMiddleware, profileController.edit);

router.put('/:id', profileController.atualizar);

router.get('/seguir/:id', profileController.seguir);

router.delete('/deletar/:id', profileController.deletar);

module.exports = router;

