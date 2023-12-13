const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getProdutoById(id) {
    return await prisma.produto.findUnique({
        where: {
            id: id
        }
    });
}
async function getAllProdutos() {
    return await prisma.produto.findMany();
}

async function createProduto(produto) {
    return await prisma.produto.create({
        data: produto
    });
}
async function updateProduto(id, produto) {
    return await prisma.produto.update({
        where: {
            id: id
        },
        data: produto
    });
}

async function deleteProduto(id) {
    return await prisma.produto.delete({
        where: {
            id: id
        }
    });
}

module.exports = {
    getProdutoById,
    getAllProdutos,
    createProduto,
    updateProduto,
    deleteProduto,
}
