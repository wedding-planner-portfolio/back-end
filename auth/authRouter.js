const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

const Users = require("../api/routes/usersModel");
const restricted = require("./restricted-middleware");

router.get("/", async (req, res) => {
  try {
    const users = await Users.getAll();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error retrieving data." });
  }
});

router.post("/register", async (req, res) => {
  let user = req.body;
  try {
    const hash = bcrypt.hashSync(user.password, 14);
    user.password = hash;
    const newUser = await Users.insert(user);
    res.status(201).json({ message: "User has been created" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error registering user." });
  }
});

router.post("/login", async (req, res) => {
  let { username, password } = req.body;
  try {
    const user = await Users.getBy(username);

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      res.status(200).json({
        message: `Welcome ${user.firstName}`,
        authToken: token,
        loggedInUser: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone
        }
      });
    } else {
      res.status(401).json({ message: "Invalid credentials." });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error logging in." });
  }
});

function generateToken(user) {
  const payload = {
    username: user.id
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
