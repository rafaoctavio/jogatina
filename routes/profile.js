var express = require('express');
var router = express.Router();
var profileController = require("./../controller/ProfileController");
var uploadMiddleware = require('../middleware/uploadMiddleware');

router.get('/', profileController.home);

router.get('/editar', profileController.edit);


module.exports = router;

