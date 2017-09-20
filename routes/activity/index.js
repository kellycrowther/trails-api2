const regions = require('express').Router();
const all = require('./all');
const activity = require('./activity');

regions.get('/', all);
regions.get('/:activity', activity);

module.exports = regions;
