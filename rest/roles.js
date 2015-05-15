// load up the model
var Role = require('./../models/role.js');

exports.create = function (req, res) {
    Role.create({
        id: mongoose.Types.ObjectId(),
        name: req.body.name
    }, function (err, todo) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        Role.find(function (err, roles) {
            if (err)
                res.send(err)
            res.json(roles);
        });
    });
};

exports.list = function (req, res) {
    Role.find(function (err, roles) {
        if (err)
            res.send(err)

        res.json(roles); // return all todos in JSON format
    });
};

exports.update = function (req, res) {
    Role.update({id: req.body.id}, {
        name: req.body.name
    }, function (err, todo) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        Role.find(function (err, roles) {
            if (err)
                res.send(err)
            res.json(roles);
        });
    });
};

exports.delete = function (req, res) {
    Role.remove({
        id: req.params.id
    }, function (err, todo) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        Role.find(function (err, roles) {
            if (err)
                res.send(err)
            res.json(roles);
        });
    })
};