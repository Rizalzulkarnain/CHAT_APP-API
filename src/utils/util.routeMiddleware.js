const usersRoutes = require('../routes/auth.routes');

module.exports = (app) => {
  app.use('/api', usersRoutes);
  app.get('/', (req, res) => {
    res.status(200).json({
      message: 'Welcome to API-Testing',
    });
  });
};
