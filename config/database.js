const Sequelize = require('sequelize');

module.exports = new Sequelize('crud_nodejs', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});
