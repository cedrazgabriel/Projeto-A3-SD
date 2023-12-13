const vendaService = require('../services/vendaService');

async function realizarVenda(req, res) {
    try {
        const { clienteId, produtos } = req.body;
        const venda = await vendaService.realizarVenda(clienteId, produtos);
        res.status(201).json(venda);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao realizar a venda' });
    }
}



module.exports = {
    realizarVenda,
}