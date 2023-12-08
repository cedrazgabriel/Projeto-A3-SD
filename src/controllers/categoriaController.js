const categoriaService = require('../services/categoriaService');

async function getAllCategorias(req, res) {
    try {
        const categorias = await categoriaService.getAllCategorias();

        if (categorias.length === 0) {
            res.status(404).json({ msg: 'Nenhuma categoria encontrada' });
        }

        res.json(categorias);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getCategoriaById(req, res) {
    try {
        const id = req.params.id;
        const categoria = await categoriaService.getCategoriaById(id);

        if (categoria === null) {
            res.status(404).json({ msg: 'Categoria não encontrada' });
        }

        res.json(categoria);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

async function createCategoria(req, res) {
    try {
        const categoria = req.body;
        const categoriaCriada = await categoriaService.createCategoria(categoria);

        res.json(categoriaCriada);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateCategoria(req, res) {
    try {
        const categoria = req.body;
        const id = req.params.id;
        const categoriaAtualizada = await categoriaService.updateCategoria(id, categoria);

        if (categoriaAtualizada === null) {
            res.status(404).json({ msg: 'Categoria não encontrada' });
        }

        res.json(categoriaAtualizada);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteCategoria(req, res) {
    try {
        const id = req.params.id;
        const categoriaDeletada = await categoriaService.deleteCategoria(id);

        if (categoriaDeletada === null) {
            res.status(404).json({ msg: 'Categoria não encontrada' });
        }

        res.json({ msg: 'Categoria deletada com sucesso' }).status(204);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllCategorias,
    getCategoriaById,
    createCategoria,
    updateCategoria,
    deleteCategoria,
    getCategoriaById,
}