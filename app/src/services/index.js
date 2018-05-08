const workflows = require('./workflows/workflows.service.js');
const ratings = require('./ratings/ratings.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(workflows);
  app.configure(ratings);
};
