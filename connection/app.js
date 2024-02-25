const express = require('express');
const mysql = require('mysql');

let connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user : 'root',
    password: 'a9591303870A',
    database : 'test'
});

connection.connect((err) => {
    if (err) return console.log(err);
    
    console.log("connected....")
});