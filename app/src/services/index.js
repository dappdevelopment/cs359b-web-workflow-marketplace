const workflows = require('./workflows/workflows.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(workflows);
};
