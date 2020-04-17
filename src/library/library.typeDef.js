const { gql } = require('apollo-server');

const typeDef = gql`
  type Library {
    name: String
    createdAt: String
    updatedAt: String
    books: [Book]
  }

  extend type Query {
    getLibrary(id: Int): Library
  }

  extend type Mutation {
    createLibrary(post: LibraryInput): CreateLibraryMutationResponse
  }

  input LibraryInput {
    name: String
  }

  type CreateLibraryMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    library: Library
  }
`;

module.exports = {
  typeDef,
};
