module.exports = `
    type Query {
        ping: String!
        editoriales: [Editorial!]!
        libros: [Libro]!
        autores: [Autor]!
        librosAutores: [LibroAutor]!
    }

    input LibroInput {
        nombre: String
        ade: String
    }

    type Mutation {
        agregarAutor(nombre: String!): Autor

        agregarLibro(input: LibroInput, ideditorial: Int!): Libro
        actualizarLibro(id: Int!, input: LibroInput): Libro

        agregarEditorial(nombre: String!): Editorial 

        asignarLibroAutor(idautor: Int!, idlibro: Int!): String!
    }

    type Editorial{
        id: ID!
        nombre: String!
        libros: [Libro!]!
    }

    type Libro{
        id: ID!
        nombre: String!
        ade: String!
        editorial: Editorial!
        autores: [Autores!]!
    }

    type Autor{
        id: ID!
        nombre: String!
        libros: [Libros!]! 
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
