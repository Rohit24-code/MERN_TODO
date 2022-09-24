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
        res.send({"msg":"signup successfull"});
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
  // console.log(username,password);

  const user = await UserModel.findOne({ username });
    
    if (user) {
      let hash = user.password;
      bcrypt.compare(password, hash, function (err, result) {
        if (result===true) {
          let token = jwt.sign({ userId:user._id }, "secret", { expiresIn: "1h" });
          res.send({ msg: "logged in", token });
        } else {
          res.send("Not a valid user");
        }
      });
    } else {
      res.send("Invalid User");
  }

});

module.exports = authRouter;
