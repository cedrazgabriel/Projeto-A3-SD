const express = require('express');
const vendaController = require('../controllers/vendaController.js');

const vendaRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Vendas
 *     description: Operações relacionadas a venda
 */


/**
 * @swagger
 * /vendas:
 *   post:
 *     summary: Realiza uma intenção de venda
 *     tags: [Vendas]
 *     requestBody:
 *       description: Objeto da venda a ser criada
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             clientId: b9a8e1ea-18f2-4eed-b28f-21ef29cc2dfa
 *             produtos: [
 *               { produtoId: b9a8e1ea-18f2-4eed-b28f-21ef29cc2dfa, quantidade: 10 },
 *               { produtoId: b9a8e1ea-18f2-4eed-b28f-21ef29cc2dfa, quantidade: 10 }
 *             ]          
 *     responses:
 *       201:
 *         description: Venda criada com sucesso
 *         content:
 *           application/json:
 *             example:
 *               id: 7edccea5-74a4-45ef-b7da-14be01d57bb0
 *               data: 2021-10-01
 *               valorTotal: 50.00
 *               clienteId: b9a8e1ea-18f2-4eed-b28f-21ef29cc2dfa  
 *       400:
 *         description: Requisição inválida devido à validação
 */


vendaRoutes.post('/', vendaController.realizarVenda);

module.exports = vendaRoutes;

