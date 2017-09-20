const activity = require('express').Router({ mergeParams: true });
const all = require('./all');

activity.get('/', all);

module.exports = activity;
