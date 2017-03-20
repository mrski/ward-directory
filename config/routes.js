
var async = require('async')

module.exports = function (app, auth) {


  var articles = require('../app/controllers/articles')  
  app.get('/articles', articles.all)
  app.get('/articles/:articleId', articles.show)

  app.param('articleId', articles.article)

  // home route
  var index = require('../app/controllers/index')
  app.get('/', index.render)

}
