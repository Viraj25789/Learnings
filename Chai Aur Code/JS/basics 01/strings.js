let name = 'viraj-parmar';
let id = 30;

console.log(name + id + "hello"); // no use

console.log(`hello my name is ${name} my id is ${id}.`); // use this : string interpulation. on the go ${} add pssible.

// String declaration
// let name = 'viraj';                // simple / type string
// let name = new String('viraj');   // also / type object 
// name / console maa ,to properties dekhade./[String: 'viraj']


// methods properties prototype

// console ma jovi / mdn
// console.log(name.__proto__); // objects jova syntax  / no use

console.log(name[0]); // v
console.log(name.length); //5

console.log(name.toUpperCase()); // VIRAJ

console.log(name.charAt(3));     // a
console.log(name.indexOf('r'));  // 2

console.log(name.substring(0,6)); // viraj-   / no neg. / if give then stat with 0
console.log(name.slice(0,6));    // viraj-   / negative possible


let b ='    hello trim     '
console.log(b.trim());        // remove starting and end space only. / start and end trim also in mdn.

let url = 'https://www.viraj.com/id=12/ nmae=34/'
console.log(url.replace(' ',"_"));     


console.log(url.includes('com'));  // searching T/F

let animal = 'dog cat horse lion monkey'
console.log(animal.split(' '));    // to array


// use above all as variable.