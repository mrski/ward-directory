/**
 * Module dependencies.
 */

var async = require('async');
var _ = require('underscore');

/**
 * Show an article
 */
exports.show = function(req, res){
  res.jsonp(req.article);
}