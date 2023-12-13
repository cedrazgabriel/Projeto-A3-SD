const express = require('express');
const categoriaController = require('../controllers/categoriaController.js');
const { validateCategoria, checkValidationResultCreate } = require('../validators/createCategoriaValidator.js');
const { validateGetById, checkValidationResultId } = require('../validators/queryIdCategoriaValidator.js');

const categoriaRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Categorias
 *     description: Operações relacionadas as categorias de produtos
 */

/**
 * @swagger
 * /categorias:
 *   get:
 *     summary: Retorna a lista de categorias
 *     tags: [Categorias]
 *     responses:
 *       200:
 *         description: Lista de categorias
 *         content:
 *           application/json:
 *             example:
 *               - id: 8a9ad155-3d38-45bf-a721-8c9afd1748d4
 *                 descricao: Limpeza
 *               - id: ad06b2e6-14e5-453b-8439-edcd8a54ea81
 *                 descricao: Vestiário
 */
categoriaRoutes.get('/', categoriaController.getAllCategorias);

/**
 * @swagger
 * /categorias/{id}:
 *   get:
 *     summary: Retorna uma categoria pelo ID
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: uuid
 *         description: ID da categoria a ser retornado
 *     responses:
 *       200:
 *         description: Categoria encontrada com sucesso
 *         content:
 *           application/json:
 *             example:
 *               id: 8a9ad155-3d38-45bf-a721-8c9afd1748d4
 *               descricao: Limpeza
 *       404:
 *         description: Categoria não encontrada
 *       400:
 *         description: Requisição inválida devido a validação
 */
categoriaRoutes.get('/:id', validateGetById, checkValidationResultId, categoriaController.getCategoriaById);

/**
 * @swagger
 * /categorias:
 *   post:
 *     summary: Cria uma nova categoria
 *     tags: [Categorias]
 *     requestBody:
 *       description: Objeto da categoria a ser criada
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             descricao: Alimentos
 *     responses:
 *       201:
 *         description: Categoria criada com sucesso
 *         content:
 *           application/json:
 *             example:
 *               id: 7edccea5-74a4-45ef-b7da-14be01d57bb0
 *               descricao: Limpeza   
 *       400:
 *         description: Requisição inválida devido a validação
 */
categoriaRoutes.post('/', validateCategoria, checkValidationResultCreate, categoriaController.createCategoria);

/**
 * @swagger
 * /categorias/{id}:
 *   put:
 *     summary: Atualiza uma categoria pelo ID
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: uuid
 *         description: ID da categoria a ser atualizada
 *     requestBody:
 *       description: Objeto da categoria com dados atualizados
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             descricao: Novo Nome
 *     responses:
 *       200:
 *         description: Categoria atualizada com sucesso
 *         content:
 *           application/json:
 *             example:
 *               id: 7edccea5-74a4-45ef-b7da-14be01d57bb0
 *               descricao: Novo Nome
 *       404:
 *         description: Categoria não encontrada
 *       400:
 *         description: Requisição inválida devido a validação
 */
categoriaRoutes.put('/:id', validateCategoria, checkValidationResultCreate, categoriaController.updateCategoria);


/**
 * @swagger
 * /categorias/{id}:
 *   delete:
 *     summary: Exclui uma categoria pelo ID
 *     tags: [Categorias]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: uuid
 *         description: ID da categoria a ser excluída
 *     responses:
 *       204:
 *         description: Categoria excluída com sucesso
 *       404:
 *         description: Categoria não encontrado
 *       400:
 *         description: Requisição inválida devido à validação
 */
categoriaRoutes.delete('/:id', validateGetById, checkValidationResultId, categoriaController.deleteCategoria);

module.exports = categoriaRoutes;

