var test = require('tape');
var varargs = require('./varargs');

test('turns arguments into an array', function(t) {

  function go() {
    var args = varargs(arguments);
    t.equal(args.length, 4);
    t.deepEqual(args, [1,2,3,4]);
    t.end();
  }

  go(1, 2, 3, 4);
});
