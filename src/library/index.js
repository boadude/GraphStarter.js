const { Library } = require('./library');
const { resolvers } = require('./library.resolver');
const { typeDef } = require('./library.typeDef');

module.exports = {
  Library,
  resolvers,
  typeDef,
};
