'use strict'

const Test = require('tapes')(require('tape'))
const Handler = require('../../../../src/api/score/handler')

const createPost = payload => {
  return {
    payload: payload || {},
    server: { log: () => { } }
  }
}

Test('score handler', handlerTest => {
  handlerTest.beforeEach(t => {
    t.end()
  })

  handlerTest.afterEach(t => {
    t.end()
  })

  handlerTest.test('userScore should', userScoreTest => {
    userScoreTest.test('return the fraud score for a given user', test => {
      const identifier = '12345'
      const identifierType = 'tel'

      const reply = response => {
        test.ok(response.id)
        test.ok(response.createdDate)
        test.ok(response.score)
        return {
          code: (statusCode) => {
            test.equal(statusCode, 200)
            test.end()
          }
        }
      }

      Handler.userScore(createPost({ identifier, identifierType }), reply)
    })
    userScoreTest.end()
  })
  handlerTest.end()
})
