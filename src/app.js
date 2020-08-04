'use strict'

const express = require('express');
const bodyParser = require('body-parser');
//npm install body-parser --save


const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');



app.use('/',indexRoute);
app.use('/',productRoute);

module.exports = app;