'use strict'

const assert = require('assert')
const util = require('../../lib/util')

describe('lib/util', () => {
  describe('#validateInput()', () => {
    it('returns undefined if input is valid', () => {
      const result = util.validateInput('228189235515787')
      assert.strictEqual(result, undefined)
    })

    it('throws if input isn\'t string', () => {
      try {
        util.validateInput(Symbol('228189235515787'))
      } catch ({ message }) {
        assert.strictEqual(message, 'Expected input to be a string')
      }
    })

    it('throws if string contains non-digits', () => {
      try {
        util.validateInput('2281892355157&87')
      } catch ({ message }) {
        assert.strictEqual(message, 'Expected string to only contain digits')
      }
    })
  })
})
