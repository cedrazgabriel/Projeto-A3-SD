const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getCategoriaById(id) {
    return await prisma.categoria.findUnique({
        where: {
            id: id
        }
    });
}
async function getAllCategorias() {
    return await prisma.categoria.findMany();
}

async function createCategoria(categoria) {
    return await prisma.categoria.create({
        data: categoria
    });
}
async function updateCategoria(id, categoria) {
    return await prisma.categoria.update({
        where: {
            id: id
        },
        data: categoria
    });
}

async function deleteCategoria(id) {
    return await prisma.categoria.delete({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAllCategorias,
    createCategoria,
    getCategoriaById,
    updateCategoria,
    deleteCategoria,
}
