// const proxy_service = require('./proxy_service');

const signup = app => (req, res, next) => {
  app.service('users').create(req.body)
    .then(user => res.json(user), next)
}

module.exports = function () {
  // Add your custom middleware here. Remember, that
  // in Express the order matters, `notFound` and
  // the error handler have to go last.
  const app = this; // eslint-disable-line no-unused-vars

  const { automationServer } = app.get('remotes');

  // app.configure(proxy_service.register({
  //   uri: 'authentication',
  //   request: automationServer
  // }))
  app.post('/signup', signup(app))
};
