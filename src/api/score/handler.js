'use strict'

const Uuid = require('uuid4')

exports.userScore = (request, reply) => {
  const createdDate = new Date()
  const score = Math.round(createdDate.getMilliseconds() / 10)
  reply({ id: Uuid(), createdDate, score }).code(200)
}
