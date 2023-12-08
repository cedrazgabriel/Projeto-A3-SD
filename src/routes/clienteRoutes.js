const express = require('express');
const clienteController = require('../controllers/clienteController.js');
const { validateCliente, checkValidationResultCreate } = require('../validators/createClienteValidator.js');
const { validateGetById, checkValidationResultId } = require('../validators/queryIdCategoriaValidator.js');

const clienteRoutes = express.Router();

clienteRoutes.get('/', clienteController.getAllClientes);
clienteRoutes.get('/:id', validateGetById, checkValidationResultId, clienteController.getClienteById);
clienteRoutes.post('/', validateCliente, checkValidationResultCreate, clienteController.createCliente);
clienteRoutes.put('/:id', clienteController.updateCliente);
clienteRoutes.delete('/:id', validateGetById, checkValidationResultId, clienteController.deleteCliente);

module.exports = clienteRoutes;

