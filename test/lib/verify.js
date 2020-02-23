'use strict'

const assert = require('assert')
const verify = require('../../lib/verify')

describe('lib/verify', () => {
  it('returns true if string is valid', () => {
    const result = verify('2281892355157872')
    assert.strictEqual(result, true)
  })

  it('returns false if string is invalid', () => {
    const result = verify('2281892355157873')
    assert.strictEqual(result, false)
  })
})
