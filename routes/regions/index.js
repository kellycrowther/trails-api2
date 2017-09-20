const regions = require('express').Router();
const all = require('./all');
const single = require('./single');
const activity = require('./activity');

regions.get('/', all);
regions.get('/:singleRegion', single);

regions.use('/:singleRegion/activity', activity);

module.exports = regions;
