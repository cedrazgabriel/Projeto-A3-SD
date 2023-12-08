const express = require('express');
const produtoController = require('../controllers/produtoController.js');
const { validateProduto, checkValidationResultCreate } = require('../validators/createProdutoValidator.js');
const { validateGetById, checkValidationResultId } = require('../validators/queryIdCategoriaValidator.js');

const produtoRoutes = express.Router();

produtoRoutes.get('/', produtoController.getAllProdutos);
produtoRoutes.get('/:id', validateGetById, checkValidationResultId, produtoController.getProdutoById);
produtoRoutes.post('/', validateProduto, checkValidationResultCreate, produtoController.createProduto);
produtoRoutes.put('/:id', produtoController.updateProduto);
produtoRoutes.delete('/:id', validateGetById, checkValidationResultId, produtoController.deleteProduto);

module.exports = produtoRoutes;

