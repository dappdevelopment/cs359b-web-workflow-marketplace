const request = require('request-promise');
const querystring = require('querystring');

class ProxyService {
  /* example options
   * {
   *   baseUrl: 'https://todo-backend-rails.herokuapp.com',
   *   json: true
   * }
   */

  constructor (options) {
    this.options = options || {};

    // A request instance that talks to the API
    this.request = request.defaults(options.request);
  }

  params_url (params) {
    let query = querystring.stringify(params.query);
    query = query ? '?' + query : ''
    return this.options.uri + '/' + query
  }

  id_params_url (id, params) {
    let query = querystring.stringify(params.query);
    query = query ? '?' + query : ''
    id = id || ''
    return this.options.uri + '/' + id + query
  }


  find (params) {
    return this.request(this.params_url(params))
  }

  get (id, params) {
    return this.request(this.id_params_url(id, params))
  }

  create (data, params) {
    return this.request({
      uri: this.params_url(params),
      method: 'POST',
      body: data
    });
  }

  update (id, data, params) {
    return this.request({
      uri: this.id_params_url(id, params),
      method: 'UPDATE',
      body: data
    });
  }

  patch (id, data, params) {
    return this.request({
      uri: this.id_params_url(id, params),
      method: 'PATCH',
      body: data
    });
  }

  remove (id, params) {
    return this.request({
      uri: this.id_params_url(id, params),
      method: 'DELETE'
    });
  }
}

const createService = function (options) {
  return new ProxyService(options);
};

module.exports = createService;


module.exports.Service = ProxyService;




module.exports.register = function (options) {
  return function() {
    if(!options.uri) {
      throw new Error('must include options.uri')
    }
    const app = this;

    // Initialize our service with any options it requires
    app.use(options.uri, createService(options));

    // Get our initialized service so that we can register hooks and filters
    const service = app.service(options.uri);

    if (options.hooks) {
      service.hooks(options.hooks);
    }

    if (options.filters && service.filter) {
      service.filter(options.filters);
    }
  }
};

