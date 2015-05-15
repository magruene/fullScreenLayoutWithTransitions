var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Story = require('./story.js'),
    Employee = require('./employee.js');

var task_schema = new Schema({
    id: Schema.Types.ObjectId,
    name: String,
    estimatedTimeInHours: Number,
    assignees: ['Employee'],
    story: {
        type: Schema.Types.ObjectId,
        ref: 'Story'
    }
});

module.exports = mongoose.model('Task', task_schema);