const express = require('express');
const relatorioController = require('../controllers/relatorioController.js');

const relatorioRouter = express.Router();

relatorioRouter.get('/produtoComMenosEstoque', relatorioController.getProdutoComMenosEstoque);

module.exports = relatorioRouter;

