/*!
 * ward-directory
 * Copyright(c) 2017 Black Name Tag Softward <brwatts@gmail.com>
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var express = require('express');
var fs = require('fs');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Load configurations
// if test env, load example file
var env = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];
var auth = require('./config/middlewares/authorization');


// Bootstrap models
var models_path = __dirname + '/app/models'
fs.readdirSync(models_path).forEach(function (file) {
  require(models_path+'/'+file)
})

var app = express()

// express settings
require('./config/express')(app, config)

// Bootstrap routes
require('./config/routes')(app)

// Start the app by listening on <port>
var port = process.env.PORT || 3000
app.listen(port)
console.log('Express app started on port '+port)

// expose app
exports = module.exports = app
