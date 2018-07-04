var express = require('express');
var router = express.Router();

var Produto = require('../model/produtoModel');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Produto.find({}).exec((err, produtos) => {
    res.json(produtos);
  });
});

router.get('/:id', function(req, res, next) {
  Produto.findOne({_id: req.params.id}).exec((err, produto) => {
    res.json(produto);
  });
});

router.get('/search/:field/:term', function(req, res, next) {
  query = {};
  query[req.params.field] = new RegExp(req.params.term, 'i');
  Produto.find(query).exec((err, results) => {
    res.json(results);
  });
});

router.put('/:id', function(req, res) {
  var produto = req.body;
  produto.alterado_em = new Date();
  Produto.update({_id: req.params.id}, req.body, function(err, data) {
    res.json({message: 'Alterado'});
  });
});

router.delete('/:id', function(req, res) {
  Produto.remove({_id: req.params.id}, function(err, data) {
    res.json({message: 'Removido'});
  });
});

router.post('/', function(req, res, next) {
  var produto = new Produto(req.body);
  produto.criado_em = new Date();
  produto.alterado_em = new Date();
  produto.save(err => {
    res.json({message: 'Criado'});
  });
});

module.exports = router;
