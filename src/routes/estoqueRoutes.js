const express = require('express');
const estoqueController = require('../controllers/estoqueController.js');

const estoqueRoutes = express.Router();

estoqueRoutes.get('/', estoqueController.getAllEstoque);
estoqueRoutes.get('/:id', estoqueController.getEstoqueByProdutoId);
estoqueRoutes.post('/adicionar', estoqueController.adicionarEstoque);
estoqueRoutes.post('/diminuir', estoqueController.diminuirEstoque);
estoqueRoutes.delete('/', estoqueController.deleteEstoque);

module.exports = estoqueRoutes;

