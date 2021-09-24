'use strict';

const methods = (iface) => {
  const names = [];
  for (const name in iface) {
    const fn = iface[name];
    if (typeof fn === 'function') {
      names.push([name, fn.length]);
    }
  }
  return names;
};

let obj = {
  name: 'object',
  countFunctions: 4,
  funct1:  function(x,y,z){
    return x+y+z;
  },
  funct2: function(a,b) {
    return a*b;
  },
  funct3: function(k,l,m,n) {
    return k-m+l-n;
  },
  funct4: function(x) {
    return 2 * x;
  },
}

console.dir(methods(obj));

module.exports = { methods };
