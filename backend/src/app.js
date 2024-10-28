const express = require('express');
const app = express();

//importando
const morgan = require('morgan');


//middlewares config
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

//routes config
//  app.use()









//-fin

module.exports = app;