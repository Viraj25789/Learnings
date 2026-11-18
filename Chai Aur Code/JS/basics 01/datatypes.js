 "use strict"; // treat all js as new version.

 // alert(3+3) / no possible / we using node not browese.

// number = 2 power 53
// BigInt
// String = ""
// Boolean = true/ false
// null =  standalone value and datatype Also 
// undefined 
// Symbol =  for uniqness 
// object 

// console.log(typeof undefined) //  undefined
// console.log(typeof null)      //  object



// const a= Symbol('123')
// const b= Symbol('123')  //both are diff because symbole is uniqe value .a===b false.


// // BigInt
// const bignumber = 56476384842676724n
// console.log(typeof bignumber) // big int

// //array
// const heros =["ironman","spiderman","superman"]
// console.log(typeof heros)  // object

// //object
// let hero ={ boss: "ironman", junior: "spiderman", god:"thor"} 
// console.log(typeof hero)  // object

// // function
// const myfunc = function sum(a,b) {
//     console.log("sum is : ", a+b);
// }
// console.log(typeof myfunc) // object function






//                   INTERVIEW

/* base on stor and acess in memorey, datatypes

primitive: call by value (chang in copy not in origional memory)origional at last origional
            string
            number
            boolean
            null
            undefined
            symbol
            bigint(scientific,big values)


non primitiv (refrance): direc refrance of memory given.
            array
            object
            functions
*/


/* js is dynamic or static type language.
   (data type define karvi k ny)
  ! DYNAMIC 
*/


/*

memory :
 
stack (primitiv) 
heap (non primtiv , refrence) 


----------                    ____________________
|    d   |  ----              |                  |
----------       \            |                  | 
----------       / ---------- |                  |
|    c   |  ----              |  {               |
|        |                    | name:"viraj",    |
|        |                    | job:"webdevloper"|
|        |                    | }                |
----------                    |                  |
----------                    |                  |
|    b   |                    |                  |
----------                    |                  |
----------                    |                  |
|   a    |                    --------------------
----------

stack                               heap


// stack

let a = 1
let b = a

b = 2

console.log(a);
console.log(b);  // a not change because a givine to b as copy of a not origional.

// a -> copy a -> b -> change in copy and b -> origional no change.



// heap

let c = {
          name:"viraj",
          job:"webdevloper"
}
let d = c

d.job = "data scientist"

console.log(c.job);
console.log(d.job);
// or
console.log(c);
console.log(d);        // c chanege because refrence of c and d are same in heap (origional).

// c -> refto heap 
// d -> c -> refto heap (same above) -> chaneg in d -> chane in heap also (origional is change) 


*/