const express = require('express');
const categoriaController = require('../controllers/categoriaController.js');

const categoriaRoutes = express.Router();

categoriaRoutes.get('/', categoriaController.getAllCategorias);
categoriaRoutes.get('/:id', categoriaController.getCategoriaById);
categoriaRoutes.post('/', categoriaController.createCategoria);
categoriaRoutes.put('/:id', categoriaController.updateCategoria);
categoriaRoutes.delete('/:id', categoriaController.deleteCategoria);

module.exports = categoriaRoutes;

