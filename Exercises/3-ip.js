'use strict';


const ipToInt = (ip = '127.0.0.1') => {
const fn = (res, item) => (res << 8) + parseInt(item);
return ip.split('.').reduce(fn, 0);
};



console.dir(ipToInt());
console.dir(ipToInt('10.0.0.1'));
console.dir(ipToInt('192.168.1.10'));
console.dir(ipToInt('165.225.133.150'));
console.dir(ipToInt('0.0.0.0'));
console.dir(ipToInt('8.8.8.8'));


module.exports = { ipToInt };  

