var express = require('express');
var router = express.Router();
var profileController = require("../controller/ProfileController");

router.get('/', profileController.home);

// router.put('/');

 

module.exports = router;

