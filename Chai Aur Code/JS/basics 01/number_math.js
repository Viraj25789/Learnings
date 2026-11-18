// const scor = 300;  //  or
// const score =new Number(300);

// console.log(scor);  // 300
// console.log(score); // [Number: 300]

// // console maa : console.log(score); => number{300} / prototype ne methods aape.

// // properties methods prototypes

// console.log(score.toString()); // string
// console.log(score.toString().___); // ___ ma string ni properties use kari sakay . . karine.
// console.log(score.toString().length); //3

// console.log(score.toFixed(2)); // 100.00 / ecommarce ma use karva / valuee pachi .__ karva.

// const num = 32.856;
// console.log(num.toPrecision(2));  // 2 -> 33 / 3 -> 33.9 / roundoff / use carefully / use when you know exact number.

// const rs = 10000000;
// console.log(rs.toLocaleString()); // 1,00,00,000 / default us
// console.log(rs.toLocaleString('en-IN')); // 1,00,00,000 / for ind

// //  MIN_VALUE , MAX_VALUE, MAX_SAFE_VALUE, MIN_SAFE_VALUE also.
 



// default        MATH LIBRARY

console.log(Math);  // Object [Math] {}
// in console more values, properties, methods, prototypes

console.log(Math.abs(-5));  // neg. => positive only no reverse 

console.log(Math.round(34.545));  // 35 roundoff
console.log(Math.ceil(34.545));  //  35 roundoff top
console.log(Math.floor(34.545));  // 34 roundoff bottom

console.log(Math.min(3,5,6,26,7,43,1)); // min value
console.log(Math.max(3,5,6,26,7,43,1)); // max value

console.log(Math.random()); // 0 to 1 betwn

console.log((Math.random()*10) +1);  //  1 upr ni value / set karvi jove em.
console.log(Math.floor((Math.random()*10) +1)); // no point value.


const min = 10;
const max = 10;
console.log(Math.floor((Math.random() * (max - min + 1)) + min));
// uparnu same j but better explaination.