// write code once execut any way / no repeat largecode.

// function myname() {
//     console.log('hello');
//     console.log('i');
//     console.log('am');    
//     console.log('viraj');        
// }
// myname()    // myname = refrence, myname() = execution
// // hello
// // i
// // am
// // viraj


// function sum(a,b){          // a,b=parameters
//     console.log(a + b);
// }
// sum()          // NaN
// sum(3,44)      // 47  / 3,44 = arguments/values

// // here use if in conditions in func. to check only num.
// sum(3,'44')    // 344
// sum(3,'a')     // 3a
// sum(3,null)    // 3


// function sum(a,b){        
//     console.log(a + b);
// }
// let result = sum(2,3)
// console.log("result is: ",result);
// // 5
// // result is:  undefined
// // here undefine shows / here in function co.log() use that for print not any specify return.


// // use this for return 
// function sum(a,b){        
//     let result = (a + b);
//     console.log('viraj'); 
//     return result

//     // or
//     // return a + b

//     // console.log(result);  // after return no any thing execute.
    
// }
// let result = sum(2,3)
// console.log("result is: ",result);
// // viraj
// // result is:  5


/* scope : in func and outside func, result var are diff.
*/



// function user(name){
//     return `${name} login success`
// }
// console.log(user('viraj'));
// // viraj login success

// console.log(user(''));
// //  login success

// console.log(user());
// //  undefined login success


// // // to solve above use this,
// function user(name){
//     if (name === undefined ) {       // or (!name)
//         console.log('enter name please');
//         return
//     }
//     return `${name} login success`
// }
// console.log(user()); 
// // enter name please
// // undefined



// // default value

// function user(name = 'viraj'){
//     return `${name} login success`
// }
// console.log(user());  // viraj login success
// console.log(user('Aman'));  // Aman login success / over write




// for shopping cart

// function calculate_cartprice(num1) {
//     return num1
// }
// console.log(calculate_cartprice(200,400,300)); 
//  200

// // to solve use,
// // rest / spred
// function calculate_cartprice(...num1) {
//     return num1
// }
// console.log(calculate_cartprice(200,400,300)); 
// //  [ 200, 400, 300 ]
// // array => make valid method and func, to calculate.

// function calculate_cartprice(val1,val2,...num1) {
//     return num1
// }
// console.log(calculate_cartprice(200,400,300,50,40)); 
// // [ 300, 50, 40 ]  / 200,400 => val1,val2



let user ={
    name :' viraj',
    price:1000
}

function objhandle(anyobj) {
    console.log(`user is:${anyobj.name} price is:${anyobj.price}`);
}
objhandle(user);
// or
// objhandle({
//     name :' viraj',
//     price:1000
// });

// user is: viraj price is:1000
// object and functions's,  keys and value are same. if not then undefine shows. 
// to reduce this use type cheking in js / typescriept is auto type check.



// // for array

// let arr = [323,454,452,234]

// function sec_val(getarr) {
//     return getarr[1]
// }
// console.log(sec_val(arr)); // or
// console.log(sec_val([323,454,452,234]));
// //  454