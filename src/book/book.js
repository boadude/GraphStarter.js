const { DataSource } = require('apollo-datasource');

class Book extends DataSource {
  initialize(config) {
    this.db = config.context.db;
  }

  async all() {
    const result = await this.db.Book.findAll();

    return result;
  }

  async findByLibrary(id) {
    const result = await this.db.Book.findAll({
      where: { libraryId: id },
    });

    return result;
  }
}

module.exports = {
  Book,
};
