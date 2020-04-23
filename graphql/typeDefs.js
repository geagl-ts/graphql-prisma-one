module.exports = `
    type Query {
        editoriales: [Editorial!]!
        editorial(id: Int!): Editorial
        libros: [Libro!]!
        libro(id: Int!): Libro
        autores: [Autor!]!
        librosAutores: [LibroAutor!]!
    }

    input LibroInput {
        nombre: String
        ade: String
    }

    type Mutation {
        agregarAutor(nombre: String!): Autor
        actualizarAutor(id: Int!, nombre: String!): Autor
        eliminarAutor(id: Int!): String!

        agregarLibro(input: LibroInput, ideditorial: Int!): Libro
        actualizarLibro(id: Int!, input: LibroInput): Libro
        eliminarLibro(id: Int!): String!

        agregarEditorial(nombre: String!): Editorial 
        actualizarEditorial(id: Int!, nombre: String!): Editorial
        eliminarEditorial(id: Int!): String!

        asignarLibroAutor(idautor: Int!, idlibro: Int!): String!
    }

    type Editorial{
        id: ID!
        nombre: String!
        libros: [Libro]
    }

    type Libro{
        id: ID!
        nombre: String!
        ade: String
        editorial: Editorial!
        autores: [Autores]
    }

    type Autor{
        id: ID!
        nombre: String!
        libros: [Libros]
    }

    type Autores {
        id: ID!
        autor: Autor!
    }

    type Libros {
        id: ID!
        libro: Libro!
    }

    type LibroAutor {
        id: ID!
        autor: Autor!
        libro: Libro!
    }
`;
