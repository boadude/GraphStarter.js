const { Sequelize, Model, DataTypes } = require('sequelize');
const { DB } = require('./utils/constants');

module.exports.createContext = () => {
  const sequelize = new Sequelize(
    DB.DATABASE_DB,
    DB.DATABASE_USER,
    DB.DATABASE_PASS,
    {
      host: DB.DATABASE_HOST,
      dialect: 'postgres',
      dialectOptions: {
        useUTC: false,
      },
      timezone: 'America/Santiago',
    }
  );

  class Library extends Model {}
  Library.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [5, 20],
        },
      },
    },
    { sequelize, modelName: 'library', tableName: 'Library' }
  );

  class Book extends Model {}
  Book.init(
    {
      name: DataTypes.STRING,
      book: DataTypes.INTEGER,
    },
    { sequelize, modelName: 'book', tableName: 'Book' }
  );

  Book.belongsTo(Library, { as: 'library' });

  return {
    db: {
      Library,
      Book,
    },
  };
};
