const { gql } = require('apollo-server');

const typeDef = gql`
  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }
`;

module.exports = {
  typeDef,
};
