var express = require('express');
var router = express.Router();
var profileController = require("../controller/ProfileController");

router.get('/', profileController.index);

router.delete('delete/');

 

module.exports = router;

