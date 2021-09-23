'use strict';


const ipToInt = (ip = '127.0.0.1') => {
  const fn = (res, item) => (res << 8) + parseInt(item);
  return ip.split('.').reduce(fn, 0);
};



// мой метод


/*const ipToInt = (ip ='127.0.0.1') =>{
let IpMass = ip.split('.');                       //   Разбили на массив символов через точку



for(let i = 0; i < IpMass.length; i++){
  IpMass[i] = parseInt(IpMass[i]);                         // Превратили их из строк в числа
}


for( let i =0; i<IpMass.length;i++){
  for( let j =0; j< i;j++){                       // Смещение влево для каждого н елемента н раз на 8
 IpMass[j]<<=8;
}
}
 

let NewIp = 0;
for(let i =0; i< IpMass.length; i++){              //сложили эти числа и получили айпи
  NewIp+=IpMass[i];
}

return NewIp;   
  }

*/

console.dir(ipToInt());
console.dir(ipToInt('10.0.0.1'));
console.dir(ipToInt('192.168.1.10'));
console.dir(ipToInt('165.225.133.150'));
console.dir(ipToInt('0.0.0.0'));
console.dir(ipToInt('8.8.8.8'));


module.exports = { ipToInt };  

