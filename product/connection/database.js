const { Sequelize } = require('sequelize');

exports.sequelize = new Sequelize('sharpener', 'root', 'a9591303870A', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
});
