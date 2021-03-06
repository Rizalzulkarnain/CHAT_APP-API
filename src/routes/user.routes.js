const router = require('express').Router();

const { update } = require('../controllers/user.controllers');

const { validate } = require('../validators');
const { updateRules } = require('../validators/user/update');

const { auth } = require('../middleware/auth');
const { userFile } = require('../middleware/fileUpload');

router.post('/update', [auth, userFile, updateRules(), validate], update);

module.exports = router;
