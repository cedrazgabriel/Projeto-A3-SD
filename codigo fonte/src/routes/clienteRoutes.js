const express = require('express');
const clienteController = require('../controllers/clienteController.js');
const { validateCliente, checkValidationResultCreate } = require('../validators/createClienteValidator.js');
const { validateGetById, checkValidationResultId } = require('../validators/queryIdCategoriaValidator.js');

const clienteRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Clientes
 *     description: Operações relacionadas a clientes
 */



/**
 * @swagger
 * /clientes:
 *   get:
 *     summary: Retorna a lista de clientes
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Lista de clientes
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 nome: João
 *                 sobreNome: Silva
 *                 email: joaosilva@gmail.com
 *                 endereco: Rua José Leite, 100, Centro, 12345-000, São Paulo, SP
 *               - id: 2
 *                 nome: Maria
 *                 sobreNome: Santos
 *                 email: mariasantos@gmail.com
 *                 endereco: Rua José Leite, 100, Centro, 12345-000, São Paulo, SP
 */
clienteRoutes.get('/', clienteController.getAllClientes);

/**
 * @swagger
 * /clientes/{id}:
 *   get:
 *     summary: Retorna um cliente pelo ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: uuid
 *         description: ID do cliente a ser retornado
 *     responses:
 *       200:
 *         description: Cliente encontrado com sucesso
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               nome: João
 *               sobreNome: Silva
 *               email: joaosilva@gmail.com
 *               endereco: Rua José Leite, 100, Centro, 12345-000, São Paulo, SP
 *       404:
 *         description: Cliente não encontrado
 *       400:
 *         description: Requisição inválida devido a validação
 */
clienteRoutes.get('/:id', validateGetById, checkValidationResultId, clienteController.getClienteById);

/**
 * @swagger
 * /clientes:
 *   post:
 *     summary: Cria um novo cliente
 *     tags: [Clientes]
 *     requestBody:
 *       description: Objeto do cliente a ser criado
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: João
 *             sobrenome: Silva
 *             email: joaosilva@gmail.com
 *             endereco: Rua José Leite, 100, Centro, 12345-000, São Paulo, SP
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 *         content:
 *           application/json:
 *             example:
 *               id: 7edccea5-74a4-45ef-b7da-14be01d57bb0
 *               nome: João
 *               sobrenome: Silva
 *               email: joaosilva@gmail.com
 *               endereco: Rua José Leite, 100, Centro, 12345-000, São Paulo, SP        
 *       400:
 *         description: Requisição inválida devido a validação
 */
clienteRoutes.post('/', validateCliente, checkValidationResultCreate, clienteController.createCliente);


/**
 * @swagger
 * /clientes/{id}:
 *   put:
 *     summary: Atualiza um cliente pelo ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: uuid
 *         description: ID do cliente a ser atualizado
 *     requestBody:
 *       description: Objeto do cliente com dados atualizados
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             nome: Novo Nome
 *             sobrenome: Novo Sobrenome
 *             email: novoemail@gmail.com
 *             endereco: Rua José Leite, 100, Centro, 12345-000, São Paulo, SP
 *     responses:
 *       200:
 *         description: Cliente atualizado com sucesso
 *         content:
 *           application/json:
 *             example:
 *               id: 7edccea5-74a4-45ef-b7da-14be01d57bb0
 *               nome: Novo Nome
 *               sobrenome: Novo Sobrenome
 *               email: novoemail@gmail.com
 *               endereco: Rua José Leite, 100, Centro, 12345-000, São Paulo, SP
 *       404:
 *         description: Cliente não encontrado
 *       400:
 *         description: Requisição inválida devido a validação
 */
clienteRoutes.put('/:id', clienteController.updateCliente);

/**
 * @swagger
 * /clientes/{id}:
 *   delete:
 *     summary: Exclui um cliente pelo ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do cliente a ser excluído
 *     responses:
 *       204:
 *         description: Cliente excluído com sucesso
 *       404:
 *         description: Cliente não encontrado
 *       400:
 *         description: Requisição inválida devido à validação
 */
clienteRoutes.delete('/:id', validateGetById, checkValidationResultId, clienteController.deleteCliente);

module.exports = clienteRoutes;

