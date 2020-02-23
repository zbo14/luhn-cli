'use strict'

const { validateInput } = require('./util')

/**
 * Verifies if a string of digits has a valid check digit.
 *
 * @param  {String} str
 *
 * @return {Boolean}
 */
module.exports = str => {
  validateInput(str)

  const len = str.length
  const par = len % 2

  let d
  let sum = +str[len - 1]

  for (let i = 0; i < len - 1; i++) {
    d = +str[i]

    if (i % 2 === par) {
      d *= 2

      if (d > 9) {
        d -= 9
      }
    }

    sum += d
  }

  return !(sum % 10)
}
