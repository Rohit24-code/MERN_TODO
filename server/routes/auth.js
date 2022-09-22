const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User.model");
const authRouter = Router();

authRouter.post("/signup", (req, res) => {
  const { name, username, email, password, mobile, country, gender } = req.body;
  try {
    bcrypt.hash(password, 6, async function (err, hash) {
      if (!err) {
        const user = new UserModel({
          name,
          username,
          email,
          password: hash,
          mobile,
          country,
          gender,
        });
        await user.save();
        res.send(user);
      } else {
        res.send("Some error occured");
      }
    });
  } catch (error) {
    console.log(error);
  }
});

authRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });
  try {
    let hash = user.password;
    if (user) {
      bcrypt.compare(password, hash, function (err, result) {
        if (!err) {
          let token = jwt.sign({ username }, "secret", { expiresIn: "1h" });
          res.send({ msg: "logged in", token });
        } else {
          res.send("Not a valid user");
        }
      });
    } else {
      res.send("Invalid User");
    }
  } catch (error) {}
});

module.exports = authRouter;
