# [@fav/type.to-number][repo-url] [![NPM version][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Converts a number or a string to a number.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.

## Install

To install from npm:

```sh
$ npm install --save @fav/type.to-number
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/type.to-number/` directory manually.*

## Usage

For Node.js:

```js
var toNumber = require('@fav/type.to-number');
toNumber(123); // => 123
toNumber('45.6'); // => 45.6
toNumber(Infinity); // => Infinity
toNumber('ABC'); // =>> NaN
toNumber('ABC', 100); // => 100
```

For Web browsers:

```html
<script src="fav.type.to-number.min.js"></script>
<script>
var toNumber = fav.type.toNumber;
toNumber(123); // => 123
</script>
```


## API

### <u>toNumber(value [, defaultValue]): number</u>

Converts a number or a string to a number.
If *value* is neither a number nor a numeric string, this function returns NaN, or *defaultValue* if specified.

***NOTE:*** `Number('')` and `Number(' ')` return `0`. `parseInt(' 123')`,  `parseInt('123abc')`, `parseFloat(' 123')` and `parseFloat('123abc')` return `123`. However, this function returns `NaN` in all such cases.


#### Parameter:

| Parameter      |  Type  | Description                           |
|----------------|:------:|---------------------------------------|
| *value*        | *any*  | The number or string to be converted. |
| *defaultValue* | *any*  | Is returned when failing to convert. (Optional) | 

#### Returns:

The converted number, or NaN (or *defaultValue* if specified) when failing to convert.

**Type:** number


## Checked                                                                      

### Node.js (4〜)

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |   10   |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2018 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.


[repo-url]: https://github.com/sttk/fav-type.to-number/
[npm-img]: https://img.shields.io/badge/npm-v1.0.1-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/type.to-number
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-type.to-number.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-type.to-number
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-type.to-number?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-type-to-number
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-type.to-number/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-type.to-number?branch=master

