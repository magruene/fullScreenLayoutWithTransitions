var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Role = require('./role.js');

var employee_schema = new Schema({
    id: Schema.Types.ObjectId,
    name: String,
    role: {
        type: Schema.Types.ObjectId,
        ref: Role
    }
});

module.exports = mongoose.model('Employee', employee_schema);