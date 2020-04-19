const prisma = require("../../database");

const Query = {
    ping() {
        return "pong!";
    },
    editoriales: async () => {
        const editoriales = await prisma.editorial.findMany({
            include: {
                libros: true,
            },
            orderBy: { id: "asc" },
        });
        return editoriales;
    },
    libros: async () => {
        const libros = await prisma.libro.findMany({
            include: {
                editorial: true,
                autores: { select: { id: true, autor: true } },
            },
            orderBy: { id: "asc" },
        });
        return libros;
    },
    autores: async () => {
        const autores = await prisma.autor.findMany({
            orderBy: { id: "asc" },
            include: {
                libros: {
                    select: {
                        id: true,
                        libro: {
                            include: {
                                editorial: true,
                            },
                        },
                    },
                },
            },
        });

        return autores;
    },
    librosAutores: async () => {
        const librosAutores = await prisma.libroAutor.findMany({
            orderBy: { id: "asc" },
            include: {
                autor: true,
                libro: {
                    include: {
                        editorial: true,
                    },
                },
            },
        });
        return librosAutores;
    },
};

module.exports = Query;
