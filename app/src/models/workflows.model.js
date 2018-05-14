// workflows-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const Schema = mongooseClient.Schema;
  const workflows = new mongooseClient.Schema({
    owner: { type: Schema.Types.ObjectId, required: true },
    slug: { type: String, required: true, unique: true },
    name: { type: String, required: true},
    numExe: { type: Number, required: true, default: 0},
    numSuccess: { type: Number, required: true, default: 0},
    tags: [String],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('workflows', workflows);
};
