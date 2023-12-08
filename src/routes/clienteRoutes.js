const express = require('express');
const clienteController = require('../controllers/clienteController.js');

const clienteRoutes = express.Router();

clienteRoutes.get('/', clienteController.getAllClientes);
clienteRoutes.get('/:id', clienteController.getClienteById);
clienteRoutes.post('/', clienteController.createCliente);
clienteRoutes.put('/:id', clienteController.updateCliente);
clienteRoutes.delete('/:id', clienteController.deleteCliente);

module.exports = clienteRoutes;

