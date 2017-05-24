'use strict'

const Handler = require('./handler')
const Joi = require('joi')
const tags = ['api', 'score']

module.exports = [
  {
    method: 'POST',
    path: '/score/user',
    handler: Handler.userScore,
    config: {
      tags: tags,
      description: 'Score for user',
      id: 'user_score',
      validate: {
        payload: {
          identifier: Joi.number().required().description('Identifier for user'),
          identifierType: Joi.string().required().valid('tel', 'eur').description('Identifier type for user')
        }
      }
    }
  }
]
