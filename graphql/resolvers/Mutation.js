const prisma = require("../../database");

const Mutation = {
    // * mutations de libros
    agregarLibro: async (_, { ideditorial, input }) => {
        const libro = await prisma.libro.create({
            data: {
                nombre: input.nombre,
                ade: input.ade,
                editorial: {
                    connect: {
                        id: ideditorial,
                    },
                },
            },
        });

        return libro;
    },
    actualizarLibro: async (_, { id, input }) => {
        const libro = await prisma.libro.update({
            where: {
                id,
            },
            data: input,
        });

        return libro;
    },
    eliminarLibro: async (_, { id }) => {
        try {
            await prisma.libro.delete({ where: { id } });
            return "Eliminado";
        } catch {
            return "A ocurrido un error";
        }
    },
    // * mutaciones de editorial
    agregarEditorial: async (_, args) => {
        const editorial = await prisma.editorial.create({
            data: {
                nombre: args.nombre,
            },
        });

        return editorial;
    },
    actualizarEditorial: async (_, { id, nombre }) => {
        try {
            const editorial = await prisma.editorial.update({
                where: { id },
                data: { nombre },
            });

            return editorial;
        } catch (e) {
            return null;
        }
    },
    eliminarEditorial: async (_, { id }) => {
        try {
            await prisma.editorial.delete({ where: { id } });

            return "Eliminado";
        } catch (e) {
            return "A ocurrido un error";
        }
    },
    // * mutaciones de autor
    agregarAutor: async (_, args) => {
        const autor = await prisma.autor.create({
            data: {
                nombre: args.nombre,
            },
        });

        return autor;
    },
    actualizarAutor: async (_, { id, nombre }) => {
        try {
            const autor = await prisma.autor.update({
                where: { id },
                data: { nombre },
            });

            return autor;
        } catch (e) {
            return null;
        }
    },
    eliminarAutor: async (_, { id }) => {
        try {
            await prisma.autor.delete({ where: { id } });

            return "Eliminado";
        } catch (e) {
            return "A ocurrido un error";
        }
    },
    asignarLibroAutor: async (_, { idautor, idlibro }) => {
        try {
            await prisma.libroAutor.create({
                data: {
                    autor: {
                        connect: {
                            id: idautor,
                        },
                    },
                    libro: {
                        connect: {
                            id: idlibro,
                        },
                    },
                },
            });

            return "Asignado Correctamente";
        } catch {
            return "A ocurrido un error";
        }
    },
};

module.exports = Mutation;
