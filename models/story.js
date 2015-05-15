var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var story_schema = new Schema({
    id: Schema.Types.ObjectId,
    name: String,
    estimatedCompletion: Number
});

module.exports = mongoose.model('Story', story_schema);