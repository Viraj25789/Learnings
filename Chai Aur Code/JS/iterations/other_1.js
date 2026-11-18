// Array specific loops

// [{},{},{}]  basic condition in work , array in objects / fetch data of objects / array>loops>obj>value



// for of 

// ARRAY
// const array = [1,2,3,4,5]
// for (const num of array) {
//     console.log(num);
// }
// // print elements of object = array,str,obj,all.
// // iterator/element as value's comman name. // object= here array that contain values.

// STRING
// const str = 'hello viraj'
// for (const word of str) {
//     console.log(word);
// }



// maps
// object / key value / order recognize of key value , obj can't.

// const map = new Map()
// map.set('IN', 'india')
// map.set('USA', 'america')
// map.set('JAP', 'japan')
// console.log(map);    
// // Map(3) { 'IN' => 'india', 'USA' => 'america', 'JAP' => 'japan' }
// no duplication like two map.set('IN', 'india') in diffrent location 
// use for unique ness 


// MAP 

const map = new Map()
map.set('IN', 'india')
map.set('USA', 'america')
map.set('JAP', 'japan')

// //
// for (const key of map) {
//     console.log(key);
    
// }
// // [ 'IN', 'india' ]
// // [ 'USA', 'america' ]
// // [ 'JAP', 'japan' ]


// //
// for (const [key,value] of map) {
//     console.log(key,' : ',value);
    
// }
// // IN  :  india
// // USA  :  america
// // JAP  :  japan



// // OBJECTS  / not itoratable for of

// const obj = {
//     'g1':'gta5',
//     'g2':'nfs',
//     'g3':'mario'
// }
// for (const [key,value] of obj) {      // not itoratable for of
//     console.log(key,' : ', value);
    
// }