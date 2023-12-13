
const categoriaRepository = require('../repositories/categoriaRepository');

async function getAllCategorias() {
    return await categoriaRepository.getAllCategorias();
}

async function createCategoria(categoria) {
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