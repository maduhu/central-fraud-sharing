'use strict'

const Test = require('tapes')(require('tape'))
const Sinon = require('sinon')
const Handler = require('../../../../src/api/score/handler')

const createPost = payload => {
  return {
    payload: payload || {},
    server: { log: () => { } }
  }
}

Test('score handler', handlerTest => {
  let clock
  let now = new Date(2017, 1, 1, 0, 0, 0, 100)

  handlerTest.beforeEach(t => {
    clock = Sinon.useFakeTimers(now.getTime())
    t.end()
  })

  handlerTest.afterEach(t => {
    clock.restore()
    t.end()
  })

  handlerTest.test('userScore should', userScoreTest => {
    userScoreTest.test('return the fraud score for a given user', test => {
      const identifier = '12345'
      const identifierType = 'tel'

      const reply = response => {
        test.ok(response.id)
        test.deepEqual(response.createdDate, now)
        test.equal(response.score, 10)
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
