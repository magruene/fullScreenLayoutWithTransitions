// load up the model
var Time = require('./../models/time.js');

exports.create = function (req, res) {
    Time.create({
        id: mongoose.Types.ObjectId(),
        employee: req.body.employee.id,
        estimatedTime: req.body.estimatedTime
    }, function (err, todo) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        Time.find(function (err, stories) {
            if (err)
                res.send(err)
            res.json(stories);
        });
    });
};

exports.list = function (req, res) {
    Time.find(function (err, timesPerEmployeePerWeek) {
        if (err)
            res.send(err)

        res.json(timesPerEmployeePerWeek); // return all todos in JSON format
    });
};

exports.update = function (req, res) {
    Time.update({id: req.body.id}, {
        employee: req.body.employee.id,
        estimatedTime: req.body.estimatedTime
    }, function (err, todo) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        Time.find(function (err, stories) {
            if (err)
                res.send(err)
            res.json(stories);
        });
    });
};

exports.delete = function (req, res) {
    Time.remove({
        id: req.params.id
    }, function (err, todo) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        Time.find(function (err, times) {
            if (err)
                res.send(err)
            res.json(times);
        });
    })
};