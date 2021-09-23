'use strict';

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  
return min + Math.floor(Math.random() * (max - min + 1));
};

console.dir(random(1,5));

console.dir(random(1,8));

console.dir(2);
module.exports = { random };