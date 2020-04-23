const prisma = require("../../database");

const Query = {
    //* queries con editoriales
    //* todas las editoriales
    editoriales: async () => {
        const editoriales = await prisma.editorial.findMany({
            include: {
                libros: {
                    include: {
                        autores: { select: { id: true, autor: true } },
                    },
                },
            },
            orderBy: { id: "asc" },
        });
        return editoriales;
    },
    //* una editorial
    editorial: async (_, { id }) => {
        const editorial = await prisma.editorial.findOne({
            where: {
                id,
            },
            include: {
                libros: {
                    include: {
                        autores: { select: { id: true, autor: true } },
                    },
                },
            },
        });

        return editorial;
    },
    //* queries con libros
    //* todos los libros
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
    //* un libro
    libro: async (_, { id }) => {
        try {
            const libro = await prisma.libro.findOne({
                where: {
                    id,
                },
                include: {
                    editorial: true,
                    autores: { select: { id: true, autor: true } },
                },
            });

            return libro;
        } catch {
            return null;
        }
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
