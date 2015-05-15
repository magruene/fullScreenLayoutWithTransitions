// load up the model
var Story = require('./../models/story.js');

exports.create = function (req, res) {
    Story.create({
        id: mongoose.Types.ObjectId(),
        name: req.body.name,
        estimatedCompletion: req.body.estimatedCompletion
    }, function (err, todo) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        Story.find(function (err, stories) {
            if (err)
                res.send(err)
            res.json(stories);
        });
    });
};

exports.list = function (req, res) {
    Story.find(function (err, stories) {
        if (err)
            res.send(err)

        res.json(stories); // return all todos in JSON format
    });
};

exports.update = function (req, res) {
    Story.update({id: req.body.id}, {
        name: req.body.name,
        estimatedCompletion: req.body.estimatedCompletion
    }, function (err, todo) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        Story.find(function (err, stories) {
            if (err)
                res.send(err)
            res.json(stories);
        });
    });
};

exports.delete = function (req, res) {
    Story.remove({
        id: req.params.id
    }, function (err, todo) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        Story.find(function (err, stories) {
            if (err)
                res.send(err)
            res.json(stories);
        });
    })
};