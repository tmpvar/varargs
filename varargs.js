module.exports = varargs;

// args is an 'arguments' object
function varargs(args) {

  var argl = args.length;
  var arga;

  if (!Array.isArray(args)) {
    arga = new Array(argl);
    for (var i = 0; i < argl; i++) {
      arga[i] = args[i];
    }
  }

  return arga;
};
