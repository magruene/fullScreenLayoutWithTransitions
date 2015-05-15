// load up the model
var Employee = require('./../models/employee.js');

exports.create = function (req, res) {
    Employee.create({
        id: mongoose.Types.ObjectId(),
        name: req.body.name,
        role: req.body.role.id
    }, function (err, todo) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        Employee.find(function (err, employees) {
            if (err)
                res.send(err)
            res.json(employees);
        });
    });
};

exports.list = function (req, res) {
    Employee.find(function (err, employees) {
        if (err)
            res.send(err)

        res.json(employees); // return all todos in JSON format
    });
};

exports.update = function (req, res) {
    Employee.update({id: req.body.id}, {
        name: req.body.name,
        role: req.body.role.id
    }, function (err, todo) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        Employee.find(function (err, employees) {
            if (err)
                res.send(err)
            res.json(employees);
        });
    });
};

exports.delete = function (req, res) {
    Employee.remove({
        id: req.params.id
    }, function (err, todo) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        Employee.find(function (err, employees) {
            if (err)
                res.send(err)
            res.json(employees);
        });
    })
};