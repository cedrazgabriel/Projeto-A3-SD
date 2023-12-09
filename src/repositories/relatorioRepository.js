const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function getProdutoComMenosEstoque() {
    return await prisma.estoque.findFirst({
        orderBy: {
            quantidade: 'asc'
        }
    });
}

async function getClienteComProdutos(clienteId) {
    return prisma.cliente.findUnique({
        where: { id: clienteId },
        include: {
            vendas: {
                include: {
                    itens: {
                        include: {
                            produto: true,
                        },
                    },
                },
            },
        },
    });
}

async function getClienteComVendas(clienteId) {
    return prisma.cliente.findUnique({
        where: { id: clienteId },
        include: {
            vendas: true,
        },
    });
}

async function getProdutosMaisVendidos() {
    const produtos = await prisma.produto.findMany({
        select: {
            id: true,
            descricao: true,
            valor: true,
            categoriaId: true,
            categoria: {
                select: {
                    descricao: true,
                },
            },
            ItemVenda: {
                select: {
                    quantidade: true,
                },
            },
        },
    });

    const produtosMaisVendidos = produtos.map((produto) => {
        const quantidadeVendida = produto.ItemVenda.reduce((acc, item) => acc + item.quantidade, 0);
        return {
            produtoId: produto.id,
            descricao: produto.descricao,
            valor: produto.valor,
            categoria: produto.categoria.descricao,
            quantidadeVendida,
        };
    });

    return produtosMaisVendidos.sort((a, b) => b.quantidadeVendida - a.quantidadeVendida);
}


module.exports = {
    getProdutoComMenosEstoque,
    getClienteComProdutos,
    getClienteComVendas,
    getProdutosMaisVendidos,
}