const express = require('express');
const produtoController = require('../controllers/produtoController.js');

const produtoRoutes = express.Router();

produtoRoutes.get('/', produtoController.getAllProdutos);
produtoRoutes.get('/:id', produtoController.getProdutoById);
produtoRoutes.post('/', produtoController.createProduto);
produtoRoutes.put('/:id', produtoController.updateProduto);
produtoRoutes.delete('/:id', produtoController.deleteProduto);

module.exports = produtoRoutes;

