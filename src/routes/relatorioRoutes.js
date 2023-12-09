const express = require('express');
const relatorioController = require('../controllers/relatorioController.js');

const relatorioRouter = express.Router();

relatorioRouter.get('/produtoComMenosEstoque', relatorioController.getProdutoComMenosEstoque);
relatorioRouter.get('/produtosPorCliente/:id', relatorioController.getProdutosPorCliente);
relatorioRouter.get('/consumoMedioCliente/:id', relatorioController.getConsumoMedioCliente);
relatorioRouter.get('/produtoMaisVendido', relatorioController.getProdutoMaisVendido);

module.exports = relatorioRouter;

