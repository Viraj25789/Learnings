// this gives current content.

const user = {
    name :'viraj',
    price:10200,
    welcome: function () {
        console.log(`${this.name} , welcome to web.`);
        // console.log(this);
        // viraj , welcome to web.
        // { name: 'viraj', price: 10200, welcome: [Function: welcome] }
    }
}

// user.welcome()  //  viraj , welcome to web.

// user.name = 'aman'
// user.welcome()  //  aman , welcome to web. / currnt is now aman.



// console.log(this);  //   {} / contex(content) is empty / in node , code.

// console.log(this); // window { .... }  / in console / browser / browse's global obj is window.


// ___________________________________________________//


// function chi(){
//     console.log(this);
// }
// chi()
// /* 
// Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Function: atob],
//   btoa: [Function: btoa],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   navigator: [Getter],
//   crypto: [Getter]
// }
// */

// function chi(){
//     let user = 'viraj'
//     console.log(this);
// }
// chi()
// // same to above


// function chi(){
//     let user = 'viraj'
//     console.log(this.user);  // can't access
// }
// chi()
// // undefined 



// // simple fun
// function chi(){
//     let user = 'viraj'
//     console.log(this);  
// }
// chi()


// // arrow function         const fun_name = () => {}
// const chi = (a,b) => {
//     return a * b
// }
// console.log(chi(2,3));



// // implicit return fun        no {} / no return / inline
// const chi = (a,b) => (a * b)
// console.log(chi(2,3));

// const chi = (a,b) => ({nmae : ' viraj'})    // obj in also({_})
// console.log(chi(2,3));




// immediately invoked function expression [ IIFE ]

// use for immediatly invoke when fun declare / use for stop polluting block/fun scope from global scope. 

// // simpl
// function db_conn(){
//     console.log(`database connect successfully !`);
// }
// db_conn()


// iife         / ;(function)(); / ; for ending

// named iife
// ;(function db_conn(){
//     console.log(`database connect successfully !`);
// })();


// as arrow fun
// unnamed iife / with parameter
// ;( (name) => {
//     console.log(`my name is ${name}`);
// })('viraj');