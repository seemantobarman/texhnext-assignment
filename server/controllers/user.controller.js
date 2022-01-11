const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.firstname) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    // Create a Tutorial
    const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
    };

    // Save Tutorial in the database
    User.create(user)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Error occurred while creating user.",
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    User.findAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while retrieving all users.",
            });
        });
};
