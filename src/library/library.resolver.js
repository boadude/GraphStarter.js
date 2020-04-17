const { UserInputError } = require('apollo-server');

const resolvers = {
  Query: {
    getLibrary: async (_, { id = 1 }, { dataSources }) => {
      const result = await dataSources.libraryStore.findById(id);

      return result;
    },
  },
  Mutation: {
    createLibrary: async (_, args, { dataSources }) => {
      if (args.post === undefined) {
        throw new UserInputError('Form Arguments invalid', {
          invalidArgs: Object.keys(args),
        });
      }

      const result = await dataSources.libraryStore.create(args.post.name);

      return result;
    },
  },
  Library: {
    books: async (parent, __, { dataSources }) => {
      const result = await dataSources.bookStore.findByLibrary(parent.id);

      return result;
    },
  },
};

module.exports = {
  resolvers,
};
