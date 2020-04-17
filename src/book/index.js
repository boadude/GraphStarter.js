const { Book } = require('./book');
const { resolvers } = require('./book.resolver');
const { typeDef } = require('./book.typeDef');

module.exports = {
  Book,
  resolvers,
  typeDef,
};
