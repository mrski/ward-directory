
var async = require('async')

module.exports = function (app, auth) {

  var articles = require('../app/controllers/articles')  
  app.get('/articles/:articleId', articles.show)

  // home route
  var index = require('../app/controllers/index')
  app.get('/', index.render)
  
}
