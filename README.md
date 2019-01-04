[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![NPM Version][npm-image]][npm-url]

# Simple ndjson Parser

* NDJSON - Newline delimited JSON



# Specs
https://github.com/ndjson/ndjson-spec


# Usage
```js
const ndjsonParser = require('ndjson-parse');

const ndjsonString =  `{"some":"thing"}
{"foo":17,"bar":false,"quux":true}
{"may":{"include":"nested","objects":["and","arrays"]}}`

const parsedNdjson = ndjsonParser(ndjsonString);

console.log(parsedNdjson[0].some) // thing
```

# Example NDJSON

~~~~~
 {"some":"thing"}
 {"foo":17,"bar":false,"quux":true}
 {"may":{"include":"nested","objects":["and","arrays"]}}
~~~~~
(with `\n` line separators)


[travis-url]: https://travis-ci.org/AlonMiz/ndjson-parse
[travis-image]: https://travis-ci.org/AlonMiz/ndjson-parse.svg?branch=master

[npm-url]: https://npmjs.org/package/ndjson-parse
[npm-image]: https://img.shields.io/npm/v/ndjson-parse.svg

[coveralls-url]: https://coveralls.io/github/AlonMiz/ndjson-parse
[coveralls-image]: https://img.shields.io/coveralls/AlonMiz/ndjson-parse.svg
