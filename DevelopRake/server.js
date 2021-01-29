const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.get('/',(req,res)=> res.send('Index Probando servidor '));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));


const Sequelize = require('sequelize');
const { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } = require('constants');

// Option 1: Passing parameters separately
const db = new Sequelize('choresApp_db', 'root', '12345678', {
    host: 'localhost',
    dialect: 'mysql',
        pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
        }
    });

//test DB 
db.authenticate()
.then(()=> console.log('Database conected'))
.catch(err => console.log('error'+err))