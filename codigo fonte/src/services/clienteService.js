
const clienteRepository = require('../repositories/clienteRepository');

async function getAllClientes() {
    return await clienteRepository.getAllClientes();
}

async function createCliente(cliente) {
    if (!cliente.nome || !cliente.email || !cliente.endereco) {
        res.status(400).json('Nome, endereço e e-mail são obrigatórios');
    }

    return await clienteRepository.createCliente(cliente);
}

async function updateCliente(id, cliente) {
    const clienteExiste = await clienteRepository.getClienteById(id);

    if (clienteExiste) {
        return await clienteRepository.updateCliente(id, cliente);
    }
    else {
        return null;
    }
}

async function deleteCliente(id) {
    const clienteExiste = await clienteRepository.getClienteById(id);

    if (clienteExiste) {
        return await clienteRepository.deleteCliente(id);
    }
    else {
        return null;
    }
}

async function getClienteById(id) {
    return await clienteRepository.getClienteById(id);
}

module.exports = {
    getAllClientes,
    createCliente,
    updateCliente,
    deleteCliente,
    getClienteById
}