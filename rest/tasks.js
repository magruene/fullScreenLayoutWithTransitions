// load up the model
var Task = require('./../models/task.js');

exports.create = function (req, res) {
    Task.create({
        id: mongoose.Types.ObjectId(),
        name: req.body.name,
        estimatedTimeInHours: req.body.estimatedTimeInHours,
        assignees: req.body.assignees,
        story: req.body.story
    }, function (err, todo) {
        if (err)
            res.send(err);
        Task.find().populate('story assignees').exec(function (err, tasks) {
            if (err)
                res.send(err)

            res.json(tasks); // return all todos in JSON format
        });
    });
};

exports.list = function (req, res) {
    Task.find().populate('story assignees').exec(function (err, tasks) {
        if (err)
            res.send(err)

        res.json(tasks); // return all todos in JSON format
    });
};

exports.update = function (req, res) {
    Task.update({id: req.body.id}, {
        name: req.body.name,
        estimatedTimeInHours: req.body.estimatedTimeInHours,
        assignees: req.body.assignees,
        story: req.body.story
    }, function (err, todo) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        Task.find().populate('story assignees').exec(function (err, tasks) {
            if (err)
                res.send(err)

            res.json(tasks); // return all todos in JSON format
        });
    });
};

exports.delete = function (req, res) {
    Task.remove({
        id: req.params.id
    }, function (err, todo) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        Task.find().populate('story assignees').exec(function (err, tasks) {
            if (err)
                res.send(err)

            res.json(tasks); // return all todos in JSON format
        });
    })
};