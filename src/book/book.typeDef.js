const { gql } = require('apollo-server');

const typeDef = gql`
  type Book {
    name: String
    year: Int
    createdAt: String
    updatedAt: String
    library: Library
  }
  extend type Query {
    getBooks: [Book]
  }
`;

module.exports = {
  typeDef,
};
