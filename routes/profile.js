var express = require('express');
var router = express.Router();
var profileController = require("../controller/profileController");

router.get('/profile', profileController.index);

 

module.exports = router;

