// product.js
const { DataTypes } = require('sequelize');
const {sequelize} = require('../connection/database');

exports.Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    imageurl: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

