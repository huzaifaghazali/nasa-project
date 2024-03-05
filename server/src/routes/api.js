const express = require('express');

const planetsRouter = require('./planets/planetsRouter');

const api = express.Router();


api.use('/planets', planetsRouter);

module.exports = api;