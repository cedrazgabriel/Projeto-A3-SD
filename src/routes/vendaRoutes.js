const express = require('express');
const vendaController = require('../controllers/vendaController.js');

const vendaRoutes = express.Router();

vendaRoutes.post('/', vendaController.realizarVenda);

module.exports = vendaRoutes;

