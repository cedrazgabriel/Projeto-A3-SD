const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getEstoqueByProdutoId(id) {
    return await prisma.estoque.findUnique({
        where: {
            produtoId: id
        }
    });
}

async function getAllEstoque() {
    return await prisma.estoque.findMany();
}

async function adicionarEstoque(estoque) {
    return await prisma.estoque.create({
        data: estoque
    });
}

async function updateEstoque(estoque) {
    return await prisma.estoque.update({
        where: {
            produtoId: estoque.produtoId
        },
        data: estoque
    });
}

async function removerEstoque(id) {
    return await prisma.estoque.delete({
        where: {
            produtoId: id
        }
    });
}

module.exports = {
    getEstoqueByProdutoId,
    getAllEstoque,
    adicionarEstoque,
    updateEstoque,
    removerEstoque
}
