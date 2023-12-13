const relatorioService = require('../services/relatorioService');

async function getProdutoComMenosEstoque(req, res) {
    const produto = await relatorioService.getProdutoComMenosEstoque();
    res.json(produto);
}

async function getProdutosPorCliente(req, res) {
    const { id } = req.params;
    const produtos = await relatorioService.getProdutosPorCliente(id);
    res.json(produtos);
}

async function getConsumoMedioCliente(req, res) {
    const { id } = req.params;
    const consumoMedio = await relatorioService.getConsumoMedioCliente(id);
    res.json(consumoMedio);
}

async function getProdutoMaisVendido(req, res) {
    const produto = await relatorioService.getProdutoMaisVendido();
    res.json(produto);
}

module.exports = {
    getProdutoComMenosEstoque,
    getProdutosPorCliente,
    getConsumoMedioCliente,
    getProdutoMaisVendido,
}