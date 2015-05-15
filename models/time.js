var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Employee = require('./employee.js');

var time_schema = new Schema({
    id: Schema.Types.ObjectId,
    employee: {
        type: Schema.Types.ObjectId,
        ref: Employee
    },
    estimatedTime: Number,
    created: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Time', time_schema);