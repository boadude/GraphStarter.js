const { DataSource } = require('apollo-datasource');
const { Responses } = require('../utils/responses');

class Library extends DataSource {
  initialize(config) {
    this.db = config.context.db;
  }

  async findById(id) {
    const result = await this.db.Library.findByPk(id);

    return result;
  }

  async create(name) {
    const result = await this.db.Library.create({
      name,
    });

    return {
      ...Responses.success(),
      library: result,
    };
  }
}

module.exports = {
  Library,
};
