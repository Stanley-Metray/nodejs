const {DataTypes} = require('sequelize');
const {sequelize} = require('../connection/database');

module.exports.Player = sequelize.define('player', {
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    dob : {
        type : DataTypes.STRING,
        allowNull : true
    },
    photourl : {
        type : DataTypes.STRING,
        allowNull : false
    },
    birthplace : {
        type : DataTypes.STRING,
        allowNull : false
    },
    career : {
        type : DataTypes.TEXT,
        allowNull : false
    },
    numberofmatches : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    score : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    fifties : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    centuries : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    wickets : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    average : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
})