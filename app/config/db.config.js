const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.customers = require('../model/customer.model.js')(sequelize, Sequelize);

db.books = require('../model/book.model.js')(sequelize, Sequelize);
db.authors = require('../model/author.model.js')(sequelize, Sequelize);
db.borrowers = require('../model/borrower.model.js')(sequelize, Sequelize);
db.book_loan = require('../model/book_loan.model.js')(sequelize, Sequelize);
db.fines = require('../model/fine.model.js')(sequelize, Sequelize);
const book_author = sequelize.define('book_author', {}, {
  timestamps: false,
  underscored: true,
  freezeTableName: true,
  tableName: 'book_author'
});

db.books.belongsToMany(db.authors, { through: book_author, foreignKey: 'isbn' })
db.authors.belongsToMany(db.books, { through: book_author, foreignKey: 'author_id' })
db.book_loan.belongsTo(db.books, { foreignKey: "isbn" });
db.book_loan.belongsTo(db.borrowers, { foreignKey: "card_id" });
db.fines.belongsTo(db.book_loan, { foreignKey: "loan_id" });
module.exports = db;