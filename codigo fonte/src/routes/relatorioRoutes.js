const express = require('express');
const relatorioController = require('../controllers/relatorioController.js');

const relatorioRouter = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Relatorios
 *     description: Endpoints para relatórios
 */

/**
 * @swagger
 * /relatorios/produtoComMenosEstoque:
 *   get:
 *     summary: Retorna o produto com menos estoque
 *     tags: [Relatorios]
 *     responses:
 *       200:
 *         description: Produto com menos estoque
 *         content:
 *           application/json:
 *             example:
 *               - id: ad06b2e6-14e5-453b-8439-edcd8a54ea81
 *                 quantidade: 10
 *                 produtoId: 1355bdf3-1e14-4e4c-8d56-49bf6d1a7c36
 */
relatorioRouter.get('/produtoComMenosEstoque', relatorioController.getProdutoComMenosEstoque);

/**
 * @swagger
 * /relatorios/produtosPorCliente/{id}:
 *   get:
 *     summary: Retorna uma lista de produtos por cliente com suas vendas
 *     tags: [Relatorios]
 *     responses:
 *       200:
 *         description: Lista de produtos por cliente
 *         content:
 *           application/json:
 *             example:
 *               - vendaId: ad06b2e6-14e5-453b-8439-edcd8a54ea81
 *                 produtoId: 1355bdf3-1e14-4e4c-8d56-49bf6d1a7c36
 *                 descricao: Boné Nike,
 *                 valor: 50,
 *                 quantidade: 2,
 *                 valorItemVenda: 25
 */
relatorioRouter.get('/produtosPorCliente/:id', relatorioController.getProdutosPorCliente);

/**
 * @swagger
 * /relatorios/consumoMedioCliente/{id}:
 *   get:
 *     summary: Retorna o consumo médio por cliente
 *     tags: [Relatorios]
 *     responses:
 *       200:
 *         description: Consumo médio do cliente
 *         content:
 *           application/json:
 *             example:
 *               - totalVendas: 3
 *                 totalValorVendas: 1500
 *                 consumoMedio: 500
 */
relatorioRouter.get('/consumoMedioCliente/:id', relatorioController.getConsumoMedioCliente);

/**
 * @swagger
 * /relatorios/produtoMaisVendido:
 *   get:
 *     summary: Retorna o ranking de produtos mais vendidos
 *     tags: [Relatorios]
 *     responses:
 *       200:
 *         description: Ranking de produtos mais vendidos
 *         content:
 *           application/json:
 *             example:
 *               - produtoId: ad06b2e6-14e5-453b-8439-edcd8a54ea81
 *                 descricao: Boné Nike,
 *                 valor: 500,
 *                 categoria: Roupa Esportiva,
 *                 quantidadeVendida: 10
 *               - produtoId: ad06b2e6-14e5-453b-8439-edcd8a54ea81
 *                 descricao: Boné Adidas,
 *                 valor: 500,
 *                 categoria: Roupa Esportiva,
 *                 quantidadeVendida: 5
 */
relatorioRouter.get('/produtoMaisVendido', relatorioController.getProdutoMaisVendido);

module.exports = relatorioRouter;
