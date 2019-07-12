const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        res
          .status(401)
          .json({
            message: "Token verification incorrect. User not verified."
          });
      } else {
        next();
      }
    });
  } else {
    res
      .status(401)
      .json({ message: "No token has been provided. User not verified." });
  }
};
