const clienteService = require('../services/clienteService');

async function getAllClientes(req, res) {
    try {
        const clientes = await clienteService.getAllClientes();

        if (clientes.length === 0) {
            return res.status(404).json('Nenhum cliente encontrado');
        }

        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getClienteById(req, res) {
    try {
        const id = req.params.id;
        const cliente = await clienteService.getClienteById(id);

        if (cliente === null) {
            return res.status(404).json({ msg: 'Cliente não encontrado' });
        }

        res.json(cliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}

async function createCliente(req, res) {
    try {
        const cliente = req.body;
        const clienteCriado = await clienteService.createCliente(cliente);

        res.json(clienteCriado);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateCliente(req, res) {
    try {
        const cliente = req.body;
        const id = req.params.id;
        const clienteAtualizado = await clienteService.updateCliente(id, cliente);

        if (clienteAtualizado === null) {
            return res.status(404).json('Cliente não encontrado');
        }

        res.json(clienteAtualizado);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteCliente(req, res) {
    try {
        const id = req.params.id;
        const clienteDeletado = await clienteService.deleteCliente(id);

        if (clienteDeletado === null) {
            return res.status(404).json({ msg: 'Cliente não encontrado' });
        }

        res.json({ msg: 'Cliente deletado com sucesso' }).status(204);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllClientes,
    createCliente,
    updateCliente,
    deleteCliente,
    getClienteById,
}