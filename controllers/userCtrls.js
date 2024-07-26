const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const db = require("../models");
// const auth = require("../auth")

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

const loginUser = (req, res) => {
    db.User.findOne({ email: req.body.email })
      .then((user) => {
        bcrypt
          .compare(req.body.password, user.password)
          .then((passwordCheck) => {
            if(!passwordCheck) {
              return res.status(400).send({
                message: "Password does not match",
                error,
              });
            }
            const token = jwt.sign(
              {
                userId: user._id,
                userEmail: user.email,
              },
              "RANDOM-TOKEN",
              { expiresIn: "24h" }
            );
            res.status(200).send({
              message: "Login Successful",
              email: user.email,
              token,
            });
          })
          .catch((error) => {
            res.status(400).send({
              message: "Password does not match",
              error,
            });
          });
      })
      .catch((err) => {
        res.status(404).send({
          message: "Email not found",
          err,
        });
      });
  };

const freeEndpoint = (req, res) => {
    res.json({message: "free access"})
}

const authEndpoint = (req, res) => {
    res.json({message: "auth access"})
}

module.exports = {
  registerUser,
  loginUser,
  freeEndpoint,
  authEndpoint,
};
