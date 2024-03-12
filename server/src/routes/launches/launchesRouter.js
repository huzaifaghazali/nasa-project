const express = require('express');

const { httpGetAllLaunches } = require('./launchesController');

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);

module.exports = launchesRouter;
