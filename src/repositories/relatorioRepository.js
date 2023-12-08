const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function getProdutoComMenosEstoque() {
    return await prisma.estoque.findFirst({
        orderBy: {
            quantidade: 'asc'
        }
    });
}

module.exports = {
    getProdutoComMenosEstoque,
}