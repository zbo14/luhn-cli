'use strict'

const assert = require('assert')
const complete = require('../../lib/complete')

describe('lib/complete', () => {
  it('adds appropriate check digit to string', () => {
    const result = complete('228189235515787')
    assert.strictEqual(result, '2281892355157872')
  })
})
