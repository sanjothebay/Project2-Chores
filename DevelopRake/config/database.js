const Sequelize = require('sequelize');


// Option 1: Passing parameters separately
// change the name of database  user and password 
module.exports  = new Sequelize('choresApp_db', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql',
        pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
        }
    });