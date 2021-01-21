const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const User = require('../models').User;
const config = require('../config/config');

const generateTokenUser = (user) => {
  delete user.password;

  const token = JWT.sign(user, config.appKey, { expiresIn: 86400 });

  return { ...user, ...{ token } };
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        error: `User not found` || error.message,
      });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({
        success: false,
        error: `Incorrect Password...!` || error.message,
      });
    }

    const userWithToken = generateTokenUser(user.get({ raw: true }));

    res.status(201).json({
      success: true,
      data: userWithToken,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.register = async (req, res) => {
  try {
    const user = await User.create(req.body);

    const userWithToken = generateTokenUser(user.get({ raw: true }));
    res.status(201).json({
      success: true,
      data: userWithToken,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
