# luhn-cli

A simple CLI to verify and generate numbers compliant with the [Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm).

## Install

`npm i -g luhn-cli`

## Usage

### Verify a number

```
$ luhn-cli verify 0000
true
```

```
$ luhn-cli verify 1234
false
```

### Generate a number

```
$ luhn-cli generate 4
5330
```

### Generate a number with a prefix

```
$ luhn-cli generate 4 12
1214
```

## Test

`npm test`
