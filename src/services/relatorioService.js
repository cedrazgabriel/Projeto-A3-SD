const relatorioRepository = require('../repositories/relatorioRepository');

async function getProdutoComMenosEstoque() {
    return await relatorioRepository.getProdutoComMenosEstoque();
}

module.exports = {
    getProdutoComMenosEstoque,
}