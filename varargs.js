module.exports = varargs;

// args is an 'arguments' object
function varargs(args)

  var argl = arguments.length;

  if (!Array.isArray(args)) {
    arga = new Array(argl);
    for (var i = 0; i < argl; i++) {
      arga[i] = arguments[i];
    }
    args = arga;
  }

  return args;
};
