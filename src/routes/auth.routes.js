const router = require('express').Router();

const { login, register } = require('../controllers/auth.controllers');

const { validate } = require('../validators');
const { registrationRules } = require('../validators/auth/register');
const { loginRules } = require('../validators/auth/login');

router.post('/login', [loginRules(), validate], login);

router.post('/register', [registrationRules(), validate], register);

module.exports = router;
