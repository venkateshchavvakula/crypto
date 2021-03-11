'use strict';

// Set default node environment to development
const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 9000; // set port 
const ip = process.env.IP || '0.0.0.0'; // set IP

const express = require('express');
const app = express()


var server = require('http').createServer(app);
require('./routes')(app);



// Start server
server.listen(port, ip, function () {
    console.log('Express server listening on %d, in %s mode', port, app.get('env'));
});

// Expose app
exports = module.exports = app;