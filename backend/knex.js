require('dotenv').config({
  path: './.env',
});

const config = require('./knexfile');
const knex = require('knex');
const environment = process.env.NODE_ENV ?? 'development';

module.exports = knex(config[environment]);
