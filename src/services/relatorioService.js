const relatorioRepository = require('../repositories/relatorioRepository');

async function getProdutoComMenosEstoque() {
    return await relatorioRepository.getProdutoComMenosEstoque();
}

async function getProdutosPorCliente(id) {
    const clienteComProdutos = await relatorioRepository.getClienteComProdutos(id);

    if (!clienteComProdutos) {
        throw new Error('Cliente não encontrado');
    }

    const produtos = [];

    clienteComProdutos.vendas.forEach((venda) => {
        venda.itens.forEach((item) => {
            produtos.push({
                vendaId: venda.id,
                produtoId: item.produto.id,
                descricao: item.produto.descricao,
                valor: item.produto.valor,
                quantidade: item.quantidade,
                valorItemVenda: item.valorItemVenda,
            });
        });
    });

    return produtos;
}

async function getConsumoMedioCliente(id) {
    const clienteComVendas = await relatorioRepository.getClienteComVendas(id);

    if (!clienteComVendas) {
        throw new Error('Cliente não encontrado');
    }

    const totalVendas = clienteComVendas.vendas.length;
    let totalValorVendas = 0;

    clienteComVendas.vendas.forEach((venda) => {
        totalValorVendas += venda.valorTotal;
    });

    const consumoMedio = totalVendas > 0 ? totalValorVendas / totalVendas : 0;

    return {
        totalVendas,
        totalValorVendas,
        consumoMedio,
    };
}

async function getProdutoMaisVendido() {
    const produtos = await relatorioRepository.getProdutosMaisVendidos();

    if (!produtos || produtos.length === 0) {
        throw new Error('Nenhum produto encontrado');
    }

    return produtos;
}

module.exports = {
    getProdutoComMenosEstoque,
    getProdutosPorCliente,
    getConsumoMedioCliente,
    getProdutoMaisVendido,
}