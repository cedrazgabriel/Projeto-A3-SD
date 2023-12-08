
const produtoRepository = require('../repositories/produtoRepository');

async function getAllProdutos() {
    return await produtoRepository.getAllProdutos();
}

async function createProduto(produto) {
    if (!produto.descricao || !produto.valor || !produto.categoriaId) {
        res.status(400).json({ msg: 'Descrição, valor e categoriaId são obrigatórios' });
    }

    return await produtoRepository.createProduto(produto);
}

async function updateProduto(id, produto) {
    const produtoExiste = await produtoRepository.getProdutoById(id);

    if (produtoExiste) {
        return await produtoRepository.updateProduto(id, produto);
    }
    else {
        return null;
    }
}

async function deleteProduto(id) {
    const produtoExiste = await produtoRepository.getProdutoById(id);

    if (produtoExiste) {
        return await produtoRepository.deleteProduto(id);
    }
    else {
        return null;
    }
}

async function getProdutoById(id) {
    return await produtoRepository.getProdutoById(id);
}

module.exports = {
    getAllProdutos,
    createProduto,
    updateProduto,
    deleteProduto,
    getProdutoById
}