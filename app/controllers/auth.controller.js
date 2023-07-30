const db = require("../models");
const User = db.user;

exports.register = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({
      message: "Username and password cannot be empty!",
    });
    return;
  }

  User.create({
    username,
    password,
  })
    .then((user) => {
      res.status(200).json({
        message: "User registered successfully.",
        user,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        message: "Some error occurred while creating the user.",
      });
    });
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  User.findOne({
    where: {
      username,
      password,
    },
  })
    .then((user) => {
      if (!user) {
        res.status(401).json({
          message: "Invalid credentials.",
        });
      } else {
        res.status(200).json({
          message: "User logged in successfully.",
          user,
        });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        message: "Some error occurred while logging in.",
      });
    });
};
