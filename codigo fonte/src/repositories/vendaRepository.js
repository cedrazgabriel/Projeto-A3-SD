const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function createVenda(data) {
    console.log(data)
    return prisma.venda.create({
        data,
    });
}

async function createItemVenda(data) {
    return prisma.itemVenda.create({
        data,
    });
}

async function updateEstoque(produtoId, quantidade) {
    return prisma.estoque.update({
        where: { produtoId },
        data: {
            quantidade: {
                decrement: quantidade,
            },
        },
    });
}

module.exports = {
    createItemVenda,
    createVenda,
    updateEstoque,
}
