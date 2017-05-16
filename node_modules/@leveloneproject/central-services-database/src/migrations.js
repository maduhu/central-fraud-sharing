'use strict'

const Knex = require('knex')

exports.migrate = function (config) {
  return Knex(config).migrate.latest()
}
