var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title:'Sistema de gerenciamento de Conteudo' });
});

router.get('/nova-noticia', function(req, res) {
    res.render('novanoticia', { title: 'Nova notícia' }); 
});

module.exports = router;
