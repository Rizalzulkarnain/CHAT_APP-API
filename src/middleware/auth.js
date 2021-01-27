require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.auth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      error: `Mising token, Forbidden Acces!`,
    });
  }

  jwt.verify(token, process.env.KEY, (error, user) => {
    if (error) {
      return res.status(401).json({
        success: false,
        error,
      });
    }

    req.user = user;
  });

  next();
};
