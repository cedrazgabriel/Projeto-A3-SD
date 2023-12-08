
const estoqueRepository = require('../repositories/estoqueRepository');

async function getAllEstoque() {
    return await estoqueRepository.getAllEstoque();
}

async function getEstoqueByProdutoId(produto) {
    return await estoqueRepository.getEstoqueByProdutoId(produto);
}

async function adicionarEstoque(estoque) {

    //Consulta pra ver se o produto já tem estoque
    const estoqueAtual = await estoqueRepository.getEstoqueByProdutoId(estoque.produtoId);

    if (estoqueAtual === null) {
        return await estoqueRepository.adicionarEstoque(estoque);
    }

    //Adiciona a quantidade que ele já tem mais a quantidade adicionada pelo usuário
    estoque.quantidade += estoqueAtual.quantidade;

    return await estoqueRepository.updateEstoque(estoque);
}

async function diminuirEstoque(estoque) {

    //Consulta pra ver se o produto já tem estoque
    const estoqueAtual = await estoqueRepository.getEstoqueByProdutoId(estoque.produtoId);

    if (estoqueAtual === null || estoqueAtual.quantidade === 0) {
        return res.status(404).json({ msg: 'Produto já se encontra sem estoque' });
    }

    //Diminui a quantidade que ele já tem menos a quantidade adicionada pelo usuário

    estoque.quantidade = estoqueAtual.quantidade - estoque.quantidade;

    if (estoque.quantidade < 0) {
        estoque.quantidade = 0;
    }

    return await estoqueRepository.updateEstoque(estoque);

}

async function removerEstoque(produtoId) {
    return await estoqueRepository.removerEstoque(produtoId);
}

async function validarEstoque(produtos) {
    for (const produto of produtos) {
        const estoque = await estoqueRepository.getEstoqueByProdutoId(produto.produtoId);

        if (!estoque || estoque.quantidade < produto.quantidade) {
            throw new Error(`Estoque insuficiente para o produto ${produto.produtoId}`);
        }
    }
}


module.exports = {
    getAllEstoque,
    getEstoqueByProdutoId,
    adicionarEstoque,
    diminuirEstoque,
    removerEstoque,
    validarEstoque
}