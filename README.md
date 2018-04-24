# concat-2d-array

![](https://travis-ci.org/lihang90/concat-2d-array.svg?branch=master)
[![npm](https://img.shields.io/npm/v/concat-2d-array.svg)](https://www.npmjs.com/package/concat-2d-array)
![npm](https://img.shields.io/npm/dm/concat-2d-array.svg)


[https://github.com/lihang90/concat-2d-array](https://github.com/lihang90/concat-2d-array)

Split 2d array items to concat to new 2d array

Just like

```javascript
[
    [1, 2],
    [3, 4],
    [5, 6]
]
```

convert to

```javascript
[
    [1, 3, 5],
    [1, 3, 6],
    [1, 4, 5],
    [1, 4, 6],
    [2, 3, 5],
    [2, 3, 6],
    [2, 4, 5],
    [2, 4, 6]
]
```

## How to use

* npm install
```
$ npm install concat-2d-array --save
```

* use
```javascript
const concat2dArray = require('concat-2d-array');

const tempArr = [
                    [1, 2],
                    [3, 4],
                    [5, 6]
                ];

const result = concat2dArray(tempArr);

console.log(result);
/*
    [
        [1, 3, 5],
        [1, 3, 6],
        [1, 4, 5],
        [1, 4, 6],
        [2, 3, 5],
        [2, 3, 6],
        [2, 4, 5],
        [2, 4, 6]
    ]
*/
```

## How to test

```
$ npm install && npm test
```