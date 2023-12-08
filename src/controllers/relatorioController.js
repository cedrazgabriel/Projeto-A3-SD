const relatorioService = require('../services/relatorioService');

async function getProdutoComMenosEstoque(req, res) {
    const produto = await relatorioService.getProdutoComMenosEstoque();
    res.json(produto);
}

module.exports = {
    getProdutoComMenosEstoque,
}