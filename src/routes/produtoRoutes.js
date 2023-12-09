const express = require('express');
const produtoController = require('../controllers/produtoController.js');
const { validateProduto, checkValidationResultCreate } = require('../validators/createProdutoValidator.js');
const { validateGetById, checkValidationResultId } = require('../validators/queryIdCategoriaValidator.js');

const produtoRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Produtos
 *     description: Operações relacionadas a produtos
 */

/**
 * @swagger
 * /produtos:
 *   get:
 *     summary: Retorna a lista de produtos
 *     tags: [Produtos]
 *     responses:
 *       200:
 *         description: Lista de produtos
 *         content:
 *           application/json:
 *             example:
 *               - id: b9a8e1ea-18f2-4eed-b28f-21ef29cc2dfa
 *                 descricao: Camisa Polo Azul
 *                 valor: 50.00
 *                 categoriaId: b9a8e1ea-18f2-4eed-b28f-21ef29cc2dfa
 *               - id: b9a8e1ea-18f2-4eed-b28f-21ef29cc2dfa
 *                 descricao: Camisa Polo Vermelha
 *                 valor: 60.00
 *                 categoriaId: b9a8e1ea-18f2-4eed-b28f-21ef29cc2dfa
 */
produtoRoutes.get('/', produtoController.getAllProdutos);

/**
 * @swagger
 * /produtos/{id}:
 *   get:
 *     summary: Retorna um produto pelo ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: uuid
 *         description: ID do produto a ser retornado
 *     responses:
 *       200:
 *         description: Produto encontrado com sucesso
 *         content:
 *           application/json:
 *             example:
 *               id: b9a8e1ea-18f2-4eed-b28f-21ef29cc2dfa
 *               descricao: Camisa Polo Azul
 *               valor: 50.00
 *               categoriaId: b9a8e1ea-18f2-4eed-b28f-21ef29cc2dfa
 *       404:
 *         description: Produto não encontrado
 *       400:
 *         description: Requisição inválida devido a validação
 */
produtoRoutes.get('/:id', validateGetById, checkValidationResultId, produtoController.getProdutoById);

/**
 * @swagger
 * /produtos:
 *   post:
 *     summary: Cria um novo produto
 *     tags: [Produtos]
 *     requestBody:
 *       description: Objeto do produto a ser criado
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             descricao: Short Jeans Sawary
 *             valor: 50.00
 *             categoriaId: b9a8e1ea-18f2-4eed-b28f-21ef29cc2dfa
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 *         content:
 *           application/json:
 *             example:
 *               id: 7edccea5-74a4-45ef-b7da-14be01d57bb0
 *               descricao: Short Jeans Sawary
 *               valor: 50.00
 *               categoriaId: b9a8e1ea-18f2-4eed-b28f-21ef29cc2dfa
 *       404:
 *        description: Categoria não encontrada       
 *       400:
 *         description: Requisição inválida devido a validação
 */
produtoRoutes.post('/', validateProduto, checkValidationResultCreate, produtoController.createProduto);

/**
 * @swagger
 * /produtos/{id}:
 *   put:
 *     summary: Atualiza um produto pelo ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: uuid
 *         description: ID do produto a ser atualizado
 *     requestBody:
 *       description: Objeto do produto com dados atualizados
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             descricao: Novo Nome
 *             valor: 100.00
 *             categoriaId: b9a8e1ea-18f2-4eed-b28f-21ef29cc2dfa
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso
 *         content:
 *           application/json:
 *             example:
 *               id: 7edccea5-74a4-45ef-b7da-14be01d57bb0
 *               descricao: Novo Nome
 *               valor: 100.00
 *               categoriaId: b9a8e1ea-18f2-4eed-b28f-21ef29cc2dfa
 *       404:
 *         description: Produto ou categoria não encontrada.
 *       400:
 *         description: Requisição inválida devido a validação
 */
produtoRoutes.put('/:id', produtoController.updateProduto);

/**
 * @swagger
 * /produtos/{id}:
 *   delete:
 *     summary: Exclui um produto pelo ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: uuid
 *         description: ID do produto a ser excluído
 *     responses:
 *       204:
 *         description: Produto excluído com sucesso
 *       404:
 *         description: Produto não encontrado
 *       400:
 *         description: Requisição inválida devido à validação
 */
produtoRoutes.delete('/:id', validateGetById, checkValidationResultId, produtoController.deleteProduto);

module.exports = produtoRoutes;

