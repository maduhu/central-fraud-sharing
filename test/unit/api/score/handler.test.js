'use strict'

const Test = require('tapes')(require('tape'))
const Sinon = require('sinon')
const Handler = require('../../../../src/api/score/handler')
const executionCondition = 'ni:///sha-256;47DEQpj8HBSa-_TImW-5JCeuQeRkm5NMpJWZG3hSuFU?fpt=preimage-sha-256&cost=0'

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

  handlerTest.test('transferScore should', transferScoreTest => {
    transferScoreTest.test('return the fraud score for a given transfer', test => {
      const payload = {
        id: 'https://central-ledger/transfers/3a2a1d9e-8640-4d2d-b06c-84f2cd613204',
        ledger: 'http://usd-ledger.example/USD',
        debits: [
          {
            account: 'http://usd-ledger.example/USD/accounts/alice',
            amount: '50'
          }
        ],
        credits: [
          {
            account: 'http://usd-ledger.example/USD/accounts/bob',
            amount: '50'
          }
        ],
        execution_condition: executionCondition,
        expires_at: '2015-06-16T00:00:01.000Z'
      }

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

      Handler.transferScore(createPost(payload), reply)
    })
    transferScoreTest.end()
  })
  handlerTest.end()
})
