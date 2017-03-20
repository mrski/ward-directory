
var path = require('path');
var rootPath = path.normalize(__dirname + '/..')

module.exports = {
  development: {
    root: rootPath,
    app: {
      name: 'Ward Directory - Development'
    }
  },
  test: {
    root: rootPath,
    app: {
      name: 'Ward Directory - Test'
    }
  },
  production: {
    root: rootPath,
    app: {
      name: 'Ward Directory - Production'
    }
  }
}
