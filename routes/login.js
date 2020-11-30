var express = require('express');
const LoginController = require('../controller/loginController');
var router = express.Router();


router.get('/', LoginController.index);

router.post('/', LoginController.doLogin);

module.exports = router;

