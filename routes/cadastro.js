var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/cadastro', function(req, res, next) {
  res.render('cadastro', { title: 'Express' });
});

module.exports = router;
