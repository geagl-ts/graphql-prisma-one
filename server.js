const { GraphQLServer } = require("graphql-yoga");

const { resolvers, typeDefs } = require("./graphql");

const server = new GraphQLServer({
    resolvers,
    typeDefs,
});

module.exports = server;
