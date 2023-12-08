const express = require('express');
const categoriaController = require('../controllers/categoriaController.js');
const { validateCategoria, checkValidationResultCreate } = require('../validators/createCategoriaValidator.js');
const { validateGetById, checkValidationResultId } = require('../validators/queryIdCategoriaValidator.js');

const categoriaRoutes = express.Router();

categoriaRoutes.get('/', categoriaController.getAllCategorias);
categoriaRoutes.get('/:id', validateGetById, checkValidationResultId, categoriaController.getCategoriaById);
categoriaRoutes.post('/', validateCategoria, checkValidationResultCreate, categoriaController.createCategoria);
categoriaRoutes.put('/:id', validateCategoria, checkValidationResultCreate, categoriaController.updateCategoria);
categoriaRoutes.delete('/:id', validateGetById, checkValidationResultId, categoriaController.deleteCategoria);

module.exports = categoriaRoutes;

