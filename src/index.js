require('dotenv').config();

const { ApolloServer, gql } = require('apollo-server');

const { createContext } = require('./context');

const book = require('./book');
const library = require('./library');
const mutation = require('./utils/mutation');

const typeDef = gql`
  type Query
  type Mutation
`;

const dataSources = () => ({
  bookStore: new book.Book(),
  libraryStore: new library.Library(),
});

const server = new ApolloServer({
  dataSources,
  context: createContext,
  typeDefs: [typeDef, mutation.typeDef, book.typeDef, library.typeDef],
  resolvers: [mutation.resolvers, book.resolvers, library.resolvers],
  engine: {
    apiKey: process.env.ENGINE_API_KEY,
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
