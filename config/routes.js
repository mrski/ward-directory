
var async = require('async')

module.exports = function (app, auth) {

  // directory routes
  var directory = require('../app/controllers/directory')  
  app.get('/directory/', directory.single)
  app.get('/directory/single', directory.single)
  app.get('/directory/double', directory.double)

  // flashcards routes
  var flashcards = require('../app/controllers/flashcards')  
  app.get('/flashcards/', flashcards.render)

  // home route
  var index = require('../app/controllers/index')
  app.get('/', index.render)
  
}
