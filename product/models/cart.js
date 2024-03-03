const {sequelize} = require('../connection/database');
const {DataTypes} = require('sequelize');


module.exports.Cart = sequelize.define('Cart',{
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    quantity : {
        type : DataTypes.INTEGER,
        allowNull : false,
        defaultValue: 0
    }
});