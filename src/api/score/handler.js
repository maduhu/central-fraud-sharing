'use strict'

const Uuid = require('uuid4')

const randomScore = () => {
  const createdDate = new Date()
  const score = Math.round(createdDate.getMilliseconds() / 10)
  return { id: Uuid(), createdDate, score }
}

exports.userScore = (request, reply) => {
  reply(randomScore()).code(200)
}

exports.transferScore = (request, reply) => {
  reply(randomScore()).code(200)
}
