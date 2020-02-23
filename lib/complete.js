'use strict'

const { validateInput } = require('./util')

/**
 * Takes a string of digits, calculates the check digit,
 * and returns the string with its check digit appended.
 *
 * @param  {String} str
 *
 * @return {String}
 */
module.exports = str => {
  validateInput(str)

  let d
  let dbl = true
  let sum = 0

  for (let i = str.length - 1; i >= 0; i--) {
    d = +str[i]

    if (dbl) {
      d *= 2

      if (d > 9) {
        d -= 9
      }
    }

    dbl = !dbl
    sum += d
  }

  return str + (sum * 9) % 10
}
