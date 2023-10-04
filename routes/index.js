var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/profil', function(req, res) {
  res.render('profil',
    {nama: 'Odelia', 'npm': 2024240018}
  );
});

module.exports = router;
