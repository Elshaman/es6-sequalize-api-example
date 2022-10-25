const Sequelize = require('sequelize')

const sequelize = new Sequelize(
    'devcamp',
    'root',
    'entershaman8286',
     {
       host: 'localhost',
       dialect: 'mysql'
     }
);

module.exports = sequelize;
