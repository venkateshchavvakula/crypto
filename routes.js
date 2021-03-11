/**
 * Main application routes
 */

'use strict';

var path = require('path');
const swaggerUi = require('swagger-ui-express');
var express = require('express');

const swaggerDocument = require('./swagger.json');
const CryptoController = require('./controllers/CryptoController')

module.exports = function (app) {
    
    app.get('/', (request, response) => {
        response.redirect('/api-docs/');
    });
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); // swagger path

    app.get('/get-ciphers',CryptoController.getCiphers)

};
