const workflows = require('./workflows/workflows.service.js');
const ratings = require('./ratings/ratings.service.js');
const users = require('./users/users.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(workflows);
  app.configure(ratings);
  app.configure(users);
};
