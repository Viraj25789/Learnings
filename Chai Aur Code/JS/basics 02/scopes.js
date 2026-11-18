// let a= 10
// const b= 20
// var c= 30

// console.log(a);
// console.log(b);
// console.log(c);

// {} is scope it's not relate to object / conditions,loop,func,others.


// if (true){
//     let a= 10
//     const b= 20
//     var c= 30 // or  c=30
// }
// console.log(a);   // no available 
// console.log(b);   // no available
// console.log(c);   // execute / 30

// let and const are shows error because they are declare in function not global and they execute outside fun.
// var is in func but also execute outside func thats not right. / then avoid.
// this is not valis when multiple programer work at once.



// {
//     const b= 20    // block scope
// }
// const b = 30       // global scope

// console ma scope / code ma node ma scope / both are diffrent.



// // nested scop 
// function one(){
//     const name = 'hitesh'

//     function two() {
//         const web = 'youtube'
//         console.log(name);
//     }
//     // console.log(web);   // if open then shows error / if comment then execute / hitesh
//     two()
// }
// one()

// // parent give child to icecream.but parent not take icecream from Children. //  closure

// always code execute line by line.



//interesting    / both are same

// // called function 
// function one(num1){
//     return num1+1
// }
// console.log(one(2));
// // -----------------   both give output 3

// console.log(one(2));
//  function one(num1){
//     return num1+1
// }



// // called expression 
// let addone = function one(num1){ 
//     return num1+1
//     }
// console.log(addone(2));  // 3
// ----------------------

// console.log(addone(2));     // error  because of hold in variable.
// let addone = function one(num1){ 
//     return num1+1
//     }