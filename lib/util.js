'use strict'

const validateInput = str => {
  if (typeof str !== 'string') {
    throw new Error('Expected input to be a string')
  }

  if (!/^[0-9]*$/.test(str)) {
    throw new Error('Expected string to only contain digits')
  }
}

module.exports = {
  validateInput
}
