var express = require('express');
var router = express.Router();

router.get('/amigos', function(req, res, next) {
  res.render('amigos', {amigos});
});

module.exports = router;
