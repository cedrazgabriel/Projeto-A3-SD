const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getClienteById(id) {
    return await prisma.cliente.findUnique({
        where: {
            id: id
        }
    });
}
async function getAllClientes() {
    return await prisma.cliente.findMany();
}

async function createCliente(cliente) {
    return await prisma.cliente.create({
        data: cliente
    });
}
async function updateCliente(id, cliente) {
    return await prisma.cliente.update({
        where: {
            id: id
        },
        data: cliente
    });
}

async function deleteCliente(id) {
    return await prisma.cliente.delete({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAllClientes,
    createCliente,
    getClienteById,
    updateCliente,
    deleteCliente,
}
