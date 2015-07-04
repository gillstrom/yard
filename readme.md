# yard [![Build Status](https://travis-ci.org/gillstrom/yard.svg?branch=master)](https://travis-ci.org/gillstrom/yard)

> Convert yard to cm, in and ft.


## Install

```
$ npm install --save yard
```


## Usage

```js
var yard = require('yard');

console.log(yard(5));
//=> {cm: 457.2, in: 180, ft: 15}

console.log(yard(5)['cm']);
//=> 457.2
```


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
