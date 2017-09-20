const routes = require('express').Router();
const regions = require('./regions');
const activity = require('./activity');

routes.use('/regions', regions);
routes.use('/activity', activity);

routes.get('/', (req, res) => {
  res.status(200).json({message: 'Connected!'});
});

module.exports = routes;
