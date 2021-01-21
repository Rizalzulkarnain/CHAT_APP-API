const { body } = require('express-validator');

exports.registrationRules = () => {
  return [
    body('firstname').notEmpty(),
    body('lastname').notEmpty(),
    body('gender').notEmpty(),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
  ];
};
