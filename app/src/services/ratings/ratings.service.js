// Initializes the `ratings` service on path `/ratings`
const createService = require('feathers-mongoose');
const createModel = require('../../models/ratings.model');
const hooks = require('./ratings.hooks');
const filters = require('./ratings.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'ratings',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/ratings', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('ratings');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
