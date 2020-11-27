var express = require('express');
var router = express.Router();
const LoginController = require('../controller/loginController');

router.get('/', LoginController.index);
router.post('/', LoginController.doLogin);

module.exports = router;