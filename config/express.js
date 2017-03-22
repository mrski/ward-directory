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
  app.set('partials', {
    header: "includes/header",
    footer: "includes/footer"
  });

  // enable jsonp
  app.enable("jsonp callback")

  // cookieParser 
  app.use(cookieParser());

  // bodyParser 
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));

  // dynamic helpers
  app.use(helpers(config.app.name))

}