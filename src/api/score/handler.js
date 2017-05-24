'use strict'

const Config = require('../../lib/config')

const retrieveUserScore = (url) => {
  let score = 0
  if (url.includes("high")) {
    score = 100
  } else if (url.includes("medium")) {
    score = 50
  }
  return score
}

exports.userScore = (request, reply) => {
  const score = retrieveUserScore(request.payload.url)
  const url = request.payload.url
  const identifier = request.payload.identifier
  reply({ url, identifier, score }).code(200)
}
