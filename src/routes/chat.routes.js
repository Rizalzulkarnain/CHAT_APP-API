const router = require('express').Router();

const {
  index,
  create,
  paginateMessages,
  deleteChat,
} = require('../controllers/chat.controllers');

const { auth } = require('../middleware/auth');

router.get('/chats', [auth], index);
router.get('/messages', [auth], paginateMessages);
router.post('/chats/create', [auth], create);
router.delete('/chats/:id', [auth], deleteChat);

module.exports = router;
