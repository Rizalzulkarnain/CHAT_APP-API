const authRoutes = require('../routes/auth.routes');
const userRoutes = require('../routes/user.routes');
const chatRoutes = require('../routes/chat.routes');

module.exports = (app) => {
  app.use('/api', chatRoutes);
  app.use('/api', authRoutes);
  app.use('/api', userRoutes);
  app.get('/', (req, res) => {
    res.status(200).json({
      message: 'Welcome to API-Testing',
    });
  });
};
