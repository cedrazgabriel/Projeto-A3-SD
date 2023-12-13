const express = require('express');
const estoqueController = require('../controllers/estoqueController.js');

const estoqueRoutes = express.Router();


/**
 * @swagger
 * tags:
 *   - name: Estoque
 *     description: Operações relacionadas ao estoque
 */

/**
 * @swagger
 * /estoque:
 *   get:
 *     summary: Retorna o estoque disponível
 *     tags: [Estoque]
 *     responses:
 *       200:
 *         description: Lista de estoque
 *         content:
 *           application/json:
 *             example:
 *               - id: ad06b2e6-14e5-453b-8439-edcd8a54ea81
 *                 quantidade: 10
 *                 produtoId: 1355bdf3-1e14-4e4c-8d56-49bf6d1a7c36
 *               - id: 44801cb0-9a0a-45f9-b8ba-bc957e424ac9
 *                 quantidade: 200
 *                 produtoId: 7efe824c-2379-4a8a-8ed7-9e5ce4a3ccf6
 */
estoqueRoutes.get('/', estoqueController.getAllEstoque);

/**
 * @swagger
 * /estoque/{id}:
 *   get:
 *     summary: Retorna o estoque do produto Id
 *     tags: [Estoque]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: uuid
 *         description: ID do produto que deseja verificar o estoque
 *     responses:
 *       200:
 *         description: Estoque encontrado com sucesso
 *         content:
 *           application/json:
 *             example:
 *               id: ad06b2e6-14e5-453b-8439-edcd8a54ea81
 *               quantidade: 10
 *               produtoId: 7efe824c-2379-4a8a-8ed7-9e5ce4a3ccf6
 *       404:
 *         description: Produto não encontrado
 *       400:
 *         description: Requisição inválida devido a validação
 */
estoqueRoutes.get('/:id', estoqueController.getEstoqueByProdutoId);

/**
 * @swagger
 * /estoque/adicionar:
 *   post:
 *     summary: Adiciona quantidade ao estoque do produto Id
 *     tags: [Estoque]
 *     requestBody:
 *       description: Objeto do estoque a ser criado
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             quantidade: 15
 *             produtoId: 7efe824c-2379-4a8a-8ed7-9e5ce4a3ccf6
 *     responses:
 *       201:
 *         description: Estoque adicionado com sucesso
 *         content:
 *           application/json:
 *             example:
 *               id: 7edccea5-74a4-45ef-b7da-14be01d57bb0
 *               quantidade: 215
 *               produtoId: 7efe824c-2379-4a8a-8ed7-9e5ce4a3ccf6
 *       404:
 *         description: Produto não encontrado
 *       400:
 *         description: Requisição inválida devido a validação
 */
estoqueRoutes.post('/adicionar', estoqueController.adicionarEstoque);

/**
 * @swagger
 * /estoque/remover:
 *   post:
 *     summary: Remove quantidade ao estoque do produto Id, se a quantidade removida for menor que 0, atualiza o estoque para 0
 *     tags: [Estoque]
 *     requestBody:
 *       description: Objeto do estoque a ser removido
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             quantidade: 15
 *             produtoId: 7efe824c-2379-4a8a-8ed7-9e5ce4a3ccf6
 *     responses:
 *       201:
 *         description: Estoque removido com sucesso
 *         content:
 *           application/json:
 *             example:
 *               id: 7edccea5-74a4-45ef-b7da-14be01d57bb0
 *               quantidade: 215
 *               produtoId: 7efe824c-2379-4a8a-8ed7-9e5ce4a3ccf6
 *       404:
 *         description: Produto não encontrado
 *       400:
 *         description: Requisição inválida devido a validação
 */
estoqueRoutes.post('/diminuir', estoqueController.diminuirEstoque);

/**
 * @swagger
 * /estoque:
 *   delete:
 *     summary: Deleta todo o estoque disponível
 *     tags: [Estoque]
 *     responses:
 *       204:
 *         description: Estoque removido com sucesso
 */
estoqueRoutes.delete('/', estoqueController.deleteEstoque);

module.exports = estoqueRoutes;

