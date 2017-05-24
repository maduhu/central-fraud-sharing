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
          url: Joi.string().required().description('Url for fraud score'),
          identifier: Joi.number().required().description('Identifier for fraud score')
        }
      }
    }
  }
]
