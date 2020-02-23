'use strict'

const assert = require('assert')
const verify = require('../../lib/verify')
const generate = require('../../lib/generate')

describe('lib/generate', () => {
  it('returns random valid string', () => {
    const result = generate(16)
    assert.strictEqual(result.length, 16)
    assert.strictEqual(verify(result), true)
  })

  it('returns random valid string with prefix', () => {
    const result = generate(16, '0000')
    assert.strictEqual(result.length, 16)
    assert(result.startsWith('0000'))
    assert.strictEqual(verify(result), true)
  })

  it('throws if length isn\'t a positive integer', () => {
    try {
      generate(-1, '000')
      assert.fail('Should throw error')
    } catch ({ message }) {
      assert.strictEqual(message, 'Expected length to be a positive integer')
    }
  })
})
