const estoqueService = require('../services/estoqueService');
const produtoService = require('../services/produtoService');

async function getAllEstoque(req, res) {
    try {
        const estoqueGeral = await estoqueService.getAllEstoque();

        if (estoqueGeral.length === 0) {
            return res.json({ msg: 'O estoque está vazio' });
        }

        res.json(estoqueGeral);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getEstoqueByProdutoId(req, res) {
    try {
        const id = req.params.id;

        //Pesquisa o produto se existe antes de consultar o estoque
        const produto = await produtoService.getProdutoById(id);

        if (produto === null) {
            return res.status(404).json({ msg: 'Produto não encontrado' });
        }

        const estoque = await estoqueService.getEstoqueByProdutoId(id);

        if (estoque === null) {
            return res.json({ msg: `O produto ${produto.descricao} não tem estoque!` });
        }

        res.json(estoque);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

async function adicionarEstoque(req, res) {
    try {
        const estoque = req.body;
        //Pesquisa o produto se existe antes de adicionar ao estoque
        const produto = await produtoService.getProdutoById(estoque.produtoId);

        if (produto === null) {
            return res.status(404).json({ msg: 'Produto não encontrado' });
        }

        await estoqueService.adicionarEstoque(estoque);

        return res.json({ msg: `Estoque do produto ${produto.descricao} adicionado com sucesso!` }).status(201);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function diminuirEstoque(req, res) {
    try {
        const estoque = req.body;

        //Pesquisa o produto se existe antes de adicionar ao estoque
        const produto = await produtoService.getProdutoById(estoque.produtoId);

        if (produto === null) {
            return res.status(404).json({ msg: 'Produto não encontrado' });
        }

        await estoqueService.diminuirEstoque(estoque);

        return res.json({ msg: `Estoque do produto ${produto.descricao} diminuido com sucesso!` }).status(201);

    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}
async function deleteEstoque(req, res) {
    try {
        const estoque = req.body;

        //Pesquisa o produto se existe antes de adicionar ao estoque
        const produto = await produtoService.getProdutoById(estoque.produtoId);

        if (produto === null) {
            return res.status(404).json({ msg: 'Produto não encontrado' });
        }

        await estoqueService.removerEstoque(estoque.produtoId);

        return res.json({ msg: `Estoque do produto ${produto.descricao} removido com sucesso!` }).status(201);

    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllEstoque,
    getEstoqueByProdutoId,
    adicionarEstoque,
    diminuirEstoque,
    deleteEstoque
}