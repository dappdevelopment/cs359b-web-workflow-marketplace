const { authenticate } = require('feathers-authentication').hooks;


module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      authenticate('jwt'),
      context => {
        let { data, params } = context
        data.owner = params.user._id
        return context
      }
    ],
    update: [
      authenticate('jwt')
    ],
    patch: [
      authenticate('jwt')
    ],
    remove: [
      authenticate('jwt')
    ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
