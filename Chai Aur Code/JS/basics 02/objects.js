// object declares methods 2 :
// litral: no singleton , constructor: singelton


let sym = Symbol("key1")  // declare symbole


//  object create 
//  declare
 
// litral: no singleton

let a = {
    name:'viraj',
    [sym]:'firstkey1',     // symbole as key
    age:18,
    id:1,
    salary:50000,
    'abc':'hello'
}                          //  litral: no singleton / declare

// key value pairs in behind store as: 'key':'value'.


// // acess object
// console.log(a.name);      // viraj
// // or
// console.log(a['name']);   // viraj


// console.log(a['abc']);    // acess 'abc' as key
// // console.log(a.'abc');  // not this posssible for ''


// console.log(a[sym]);      // acess symbole as key / no '_'


// a.id = 123;           // change value
// console.log(a);


// Object.freeze(a);     // no change in object / freez object
// a.id = 123;           
// console.log(a);
// /*  origional no change after change also
// {
//   name: 'viraj', age: 18, id: 1, salary: 50000, abc: 'hello', [Symbol(key1)]: 'firstkey1' }
// */



// a.greeting = function(){
//     console.log('hello user !');    
// }

// console.log(a.greeting);   //  [Function (anonymous)]
// console.log(a.greeting()); //  hello user !   undefined



// refrance method

// a.greeting = function(){
//     console.log(`hello ${this.name} !`);    // no '' / `` use here.
// }

// console.log(a.greeting());     // hello viraj !  undefined


// -------------------------------------------------

// constructor: singelton    // Object.create

// declare / creat

// let x = new Object()
// console.log(x);           // {}
// // let x = {}             // {} same output


// let x = {}
// x.name='viraj'
// x.id=23
// console.log(x);           // { name: 'viraj', id: 23 }  


//  let x = {
//     name:'viraj',
//     id:123,
//     phone:'poco',
//     full: {
//         more:{
//             first:'viraj m.',
//             last:'parmar'
//         }

//     }
// }


// console.log(x.full);        // { more: { first: 'viraj m.', last: 'parmar' } }
// console.log(x.full.more.first);  // viraj m.


// console.log(x.full?.more?.first);   // ? use for protection / if this exist then go next / use in project and api's.



let x ={
    1:'a',
    2:'b',
}
let y ={
    3:'s',
    4:'v',
}


// let z= {x,y}   
// console.log(z); 
// no use for join  / { x: { '1': 'a', '2': 'b' }, y: { '3': 's', '4': 'v' } }


// let z = Object.assign({},x,y);
// console.log(z); 
// // { '1': 'a', '2': 'b', '3': 's', '4': 'v' } 
// // {} use for gurrenty / {} target , x,y,.. source


// let z = {...x,...y};   // spread / use this 
// console.log(z);  
// // { '1': 'a', '2': 'b', '3': 's', '4': 'v' }

 

// // values from database
// let user=[
//     {
//         id:1,
//         name:'viraj'
//     },
//     {
//         id:2,
//         name:'asd'
//     },
//     {
//         id:3,
//         name:'df'
//     },
//     {
//         id:4,
//         name:'fdg'
//     },
//     {
//         id:5,
//         name:'fg'
//     }
// ]

// console.log(user[1].id);  // acess value  / [{}'s index].key



let b = {
    name:'viraj',
    age:18,
    id:1,
    salary:50000,
    'abc':'hello'
}                    

// console.log(Object.keys(b));
// // [ 'name', 'age', 'id', 'salary', 'abc' ]
// console.log(Object.values(b));
// // [ 'viraj', 18, 1, 50000, 'hello' ]

// // here output is arrray , so use arrays functions.



// console.log(Object.entries(b));
// // array in array

// // [
// //   [ 'name', 'viraj' ],
// //   [ 'age', 18 ],
// //   [ 'id', 1 ],
// //   [ 'salary', 50000 ],
// //   [ 'abc', 'hello' ]
// // ]



// console.log(b.hasOwnProperty('id'));  // t / f
// // search only key 

// more in console



// _______    obj. destructure and json api    _______


// // object -> gestructure -> value


// let sd = {
//     course :'js',
//     price:'free',
//     teacher:'jatin',
//     course_description:'this is description'
// }

// console.log(sd.teacher);  //  true  / use

// // destructure

// let {teacher}= sd         // true   / use
// console.log(teacher);


// let {course_description: desc}= sd  // short the key name
// console.log(desc);


// // use in react 
// // here in () use (props.company) / but using destructure use like {company} only.
// let navbar = ({compny}) => {   

// }
// navbar(compny = 'hitesh')



// // Api 

// // pela xml ma aavti value / now jason ma aave.


// // json     / keys and value are in '_'

// // obj
// {
//     'course' :'js',
//     'price':'free',
//     'teacher':'jatin',
//     'course_description':'this is description'
// }
// // uprna form ma aave api file -> fetch method -> object.


// // arr
// [
//     {
//     'course' :'js',
//     'price':'free',
//     'teacher':'jatin',
//     'course_description':'this is description'
//     },
//     {},
//     {},
//     {}
// ]
