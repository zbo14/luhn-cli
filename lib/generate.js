'use strict'

const complete = require('./complete')
const { validateInput } = require('./util')

/**
 * Generates a string with the specified length (including check digit).
 * If a prefix is specified, the return string will start with that sequence.
 * The *total* length of the string will still equal the length specified.
 *
 * @param  {Number} len
 * @param  {String} [prefix = '']
 *
 * @return {String}
 */
module.exports = (len, prefix = '') => {
  len = +len

  if (!(Number.isInteger(len) && len > 0)) {
    throw new Error('Expected length to be a positive integer')
  }

  validateInput(prefix)

  let arr = []

  if (prefix) {
    len -= prefix.length
    arr = [...prefix].map(x => +x).filter(Number.isInteger)
  }

  for (let i = 0; i < len - 1; i++) {
    arr.push(Math.floor(Math.random() * 10))
  }

  return complete(arr.join(''))
}
