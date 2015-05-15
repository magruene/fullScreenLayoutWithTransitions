var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var role_schema = new Schema({
    id: Schema.Types.ObjectId,
    name: String
});

module.exports = mongoose.model('Role', role_schema);