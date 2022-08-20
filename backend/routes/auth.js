const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserSchema = require("../models/User.js");

// ? Register
router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password, passwordAgain } = req.body;

    if (password === passwordAgain) {
      if (await UserSchema.findOne({ email: email })) {
        console.log(`User has already registered!`.red);
        return res.status(403).json("User has already registered!");
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await UserSchema.create({
          fullName: firstName + " " + lastName,
          email: email,
          password: hashedPassword,
        });
        console.log(`User registration successful!`.green);
        return res.status(201).json(newUser);
      }
    } else if (password !== passwordAgain) {
      console.log(`Passwords aren't the same!`.red);
      return res.status(403).json("Passwords aren't the same!");
    }
  } catch (error) {
    console.log(`User registration failed!: ${error}`.red);
    return res.status(500).json(error);
  }
});

// ? Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserSchema.findOne({ email: email });

    if (user) {
      const isPasswordsEqual = await bcrypt.compare(password, user.password);
      const { password: userPassword, ...others } = user._doc;

      if (isPasswordsEqual) {
        console.log("User logined successfully!".green);

        const accessToken = jwt.sign(
          {
            id: user._id,
            isAdmin: user.isAdmin,
          },
          process.env.JWT_SEC,
          {expiresIn:"3d"}
        );

        return res.status(200).json({...others, accessToken});
      } else {
        console.log("Wrong password!".red);
        return res.status(403).json("User not registered!");
      }
    } else {
      console.log("User not registered!".red);
      return res.status(403).json("User not registered!");
    }
  } catch (error) {
    console.log(`User login failed!: ${error}`.red);
    return res.status(403).json("User login failed!: " + error);
  }
});

module.exports = router;
