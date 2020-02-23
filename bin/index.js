#!/usr/bin/env node

'use strict'

const luhn = require('../lib')

const { argv } = process

if (!argv[2]) {
  console.log([
    'Usage: luhn <command> args\n',
    'Commands:',
    '  generate  <length> [prefix]',
    '  verify    <input>'
  ].join('\n'))

  process.exit()
}

const commands = [
  'generate',
  'verify'
]

if (commands.includes(argv[2])) {
  try {
    console.log(luhn[argv[2]](...argv.slice(3)))
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
} else {
  console.error('Unrecognized command: ' + argv[2])
  process.exit(1)
}
