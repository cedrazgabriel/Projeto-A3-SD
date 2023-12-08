const vendaRepository = require('../repositories/vendaRepository');
const estoqueService = require('./estoqueService');
const produtoService = require('./produtoService');

async function realizarVenda(clienteId, produtos) {
    // Valida o estoque antes de prosseguir com a venda
    await estoqueService.validarEstoque(produtos);

    // Cria a venda
    const venda = await vendaRepository.createVenda({
        data: new Date(),
        valorTotal: await calcularValorTotal(produtos),
        clienteId,
    });

    // Adiciona os produtos vendidos à tabela ItemVenda e atualiza o estoque
    for (const produto of produtos) {
        const produtoItem = await produtoService.getProdutoById(produto.produtoId);

        await vendaRepository.createItemVenda({
            quantidade: produto.quantidade,
            vendaId: venda.id,
            produtoId: produto.produtoId,
            valorProduto: produtoItem.valor,
            valorItemVenda: produtoItem.valor * produto.quantidade,
        });

        await vendaRepository.updateEstoque(produto.produtoId, produto.quantidade);
    }

    return venda;
}


async function calcularValorTotal(produtos) {
    const precosProdutos = await Promise.all(
        produtos.map(async (produto) => {
            const produtoInfo = await produtoService.getProdutoById(produto.produtoId);
            const precoProduto = produtoInfo.valor;
            return precoProduto * produto.quantidade;
        })
    );

    const valorTotal = precosProdutos.reduce((total, precoProduto) => total + precoProduto, 0);

    return Number(valorTotal.toFixed(2));
}
module.exports = {
    realizarVenda,
}
