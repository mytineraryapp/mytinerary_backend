const bcrypt = require("bcrypt");
const db = require("../models");

const registerUser = (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      const user = new db.User({
        email: req.body.email,
        password: hashedPassword,
      });
      user
        .save()
        .then((result) => {
          res.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        .catch((error) => {
          res.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Password was not hashed successfully",
        err,
      });
    });
};

module.exports = {
  registerUser,
};
