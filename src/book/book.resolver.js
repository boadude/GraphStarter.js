const resolvers = {
  Query: {
    getBooks: async (_, __, { dataSources }) => {
      const result = await dataSources.bookStore.all();

      return result;
    },
  },
  Book: {
    library: async (parent, __, { dataSources }) => {
      const book = parent.dataValues;

      const result = await dataSources.libraryStore.findById(book.libraryId);

      return result;
    },
  },
};

module.exports = {
  resolvers,
};
