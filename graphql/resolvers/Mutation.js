const prisma = require("../../database");

const Mutation = {
    agregarLibro: async (_, args) => {
        const libro = await prisma.libro.create({
            data: {
                nombre: args.nombre,
                ade: args.ade,
                editorial: {
                    connect: {
                        id: args.ideditorial,
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
    agregarEditorial: async (_, args) => {
        const editorial = await prisma.editorial.create({
            data: {
                nombre: args.nombre,
            },
        });

        return editorial;
    },
    agregarAutor: async (_, args) => {
        const autor = await prisma.autor.create({
            data: {
                nombre: args.nombre,
            },
        });

        return autor;
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
