/**
 * Module dependencies.
 */

var async = require('async');
var _ = require('underscore');

/**
 * Single column directory
 */
exports.single = function(req, res){
  res.jsonp(req.article);
}

/**
 * Double column directory
 */
exports.double = function(req, res){
  res.jsonp(req.article);
}