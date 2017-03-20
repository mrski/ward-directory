/**
 * Module dependencies.
 */

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');
var favicon = require('serve-favicon');
var helpers = require('view-helpers');
var logger = require('morgan');
var path = require('path');

module.exports = function (app, config) {

  app.set('showStackError', true)

  app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')));

  app.use(express.static(config.root + '/public'))

  // don't use logger for test env
  if (process.env.NODE_ENV !== 'test') {
    app.use(logger('dev'));
  }
  
  // set views path, template engine and default layout
  app.set('views', config.root + '/app/views')
  app.engine('html', require('hogan-express'));
  app.set('view engine', 'html');
  app.set('layout', 'layouts/default');
  app.set('partials', {header: "includes/header"});
  
  // enable jsonp
  app.enable("jsonp callback")

  // cookieParser 
  app.use(cookieParser());

  // bodyParser 
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // dynamic helpers
  app.use(helpers(config.app.name))

  // assume "not found" in the error msgs
  // is a 404. this is somewhat silly, but
  // valid, you can do whatever you like, set
  // properties, use instanceof etc.
  app.use(function(err, req, res, next){
    // treat as 404
    if (~err.message.indexOf('not found')) return next()

    // log it
    console.error(err.stack)

    // error page
    res.status(500).render('500', { error: err.stack })
  })

  // assume 404 since no middleware responded
  app.use(function(req, res, next){
    res.status(404).render('404', { url: req.originalUrl, error: 'Not found' })
  })
}
