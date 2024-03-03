const {DataTypes} = require('sequelize');
const {sequelize} = require('../connection/database');

exports.User = sequelize.define('User', {
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true,
        allowNull : false
    },

    username : {
        type : DataTypes.STRING,
        allowNull : false
    },
    
    email : {
        type : DataTypes.STRING,
        allowNull : false
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    }
});