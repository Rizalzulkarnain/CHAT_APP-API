const { body } = require('express-validator');

exports.updateRules = () => {
  return [
    body('firstname').notEmpty(),
    body('lastname').notEmpty(),
    body('gender').notEmpty(),
    body('email').isEmail(),
    body('password').optional().isLength({ min: 5 }),
  ];
};
