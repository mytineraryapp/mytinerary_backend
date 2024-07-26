const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ error: "Authorization header missing" });
    }
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Token missing" });
    }
    const decodedToken = jwt.verify(token, "RANDOM-TOKEN");
    req.user = decodedToken;
    next();
  } catch (err) {
    res.status(401).json({
      error: "Invalid request",
      message: err.message,
    });
  }
};

module.exports = auth;
