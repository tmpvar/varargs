# varags

turn an `arguments` object into an array

## install 

`npm install varags`

## use

```javascript

var varargs = require('varargs');

function myfunction() {
  var args = varargs(arguments);
  console.log(args); // ['abc', 123]
}

myfunction('abc', 123);

```

## license

[MIT](LICENSE.txt)
