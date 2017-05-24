'use strict'

const Uuid = require('uuid4')
const Config = require('../../lib/config')

const getRandomScore = () => {
  let score = 0

}

exports.userScore = (request, reply) => {
  const createdDate = new Date()
  const score = createdDate.getMilliseconds() / 10
  reply({ score, createdDate, id: Uuid() }).code(200)
}
