const produtoService = require('../services/produtoService');

async function getAllProdutos(req, res) {
    try {
        const produtos = await produtoService.getAllProdutos();

        if (produtos.length === 0) {
            return res.status(404).json({ msg: 'Nenhum produto encontrado' });
        }

        res.json(produtos);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getProdutoById(req, res) {
    try {
        const id = req.params.id;
        const produto = await produtoService.getProdutoById(id);

        if (produto === null) {
            return res.status(404).json({ msg: 'Produto não encontrado' });
        }

        res.json(produto);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

async function createProduto(req, res) {
    try {
        const produto = req.body;
        const produtoCriado = await produtoService.createProduto(produto);

        res.json(produtoCriado);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateProduto(req, res) {
    try {
        const produto = req.body;
        const id = req.params.id;
        const produtoAtualizado = await produtoService.updateProduto(id, produto);

        if (produtoAtualizado === null) {
            return res.status(404).json({ msg: 'Produto não encontrado' });
        }

        res.json(produtoAtualizado);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteProduto(req, res) {
    try {
        const id = req.params.id;
        const produtoDeletado = await produtoService.deleteProduto(id);

        if (produtoDeletado === null) {
            return res.status(404).json({ msg: 'Produto não encontrado' });
        }

        res.json({ msg: 'Produto deletado com sucesso' }).status(204);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllProdutos,
    getProdutoById,
    createProduto,
    updateProduto,
    deleteProduto,
    getProdutoById,
}