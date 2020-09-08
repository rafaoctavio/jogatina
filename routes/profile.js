var express = require('express');
var router = express.Router();
var profileController = require("../controller/profileController");

router.get('/', profileController.index);

 

module.exports = router;

