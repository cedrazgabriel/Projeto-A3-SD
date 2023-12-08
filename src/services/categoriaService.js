
const categoriaRepository = require('../repositories/categoriaRepository');
const categoriaRoutes = require('../routes/categoriaRoutes');

async function getAllCategorias() {
    return await categoriaRepository.getAllCategorias();
}

async function createCategoria(categoria) {
    if (!categoria.descricao) {
        res.status(400).json('Descrição da categoria é obrigatório');
    }

    return await categoriaRepository.createCategoria(categoria);
}

async function updateCategoria(id, categoria) {
    const categoriaExiste = await categoriaRepository.getCategoriaById(id);

    if (categoriaExiste) {
        return await categoriaRepository.updateCategoria(id, categoria);
    }
    else {
        return null;
    }
}

async function deleteCategoria(id) {
    const categoriaExiste = await categoriaRepository.getCategoriaById(id);

    if (categoriaExiste) {
        return await categoriaRepository.deleteCategoria(id);
    }
    else {
        return null;
    }
}

async function getCategoriaById(id) {
    return await categoriaRepository.getCategoriaById(id);
}

module.exports = {
    getAllCategorias,
    createCategoria,
    updateCategoria,
    deleteCategoria,
    getCategoriaById
}