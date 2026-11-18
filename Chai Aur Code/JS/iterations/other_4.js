// for each 
// it no return value

// const code = ['java','python','c++','ruby']

// code.forEach((ele)=> {console.log(ele);})
// // java
// // python
// // c++
// // ruby


// //
// const values = code.forEach((ele)=> {
//     console.log(ele);
// })
// console.log(values);

// // java
// // python
// // c++
// // ruby
// // undefined     //  if take as var no return value(undefined) here


// const values = code.forEach((ele)=> {
//     console.log(ele);
//     return values
// })
// console.log(values);

// // java
// // python
// // c++
// // ruby
// // undefined     //  if take as var no return value(undefined) here.also if include return in code.



// for return get , this methods.

// // filter

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// // const newnum = numbers.filter((num)=>num > 4)  // filter(callback fun.)
// //or
// // const newnum = numbers.filter((num) => {
// //     return num>4
// // })

// console.log(newnum);
// // [ 5, 6, 7, 8, 9, 10 ]
// // it returns values ,that for each not



// // using foreach
// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const newnum = []

// numbers.forEach((num)=>{
//     if(num>4){
//         newnum.push(num)
//     }
// })
// console.log(newnum);  
// //  [ 5, 6, 7, 8, 9, 10 ]



// // fiter uses

// const books = [
//     {title:'one', name:'viraj', publish: 1980, entry:'2025'},
//     {title:'two', name:'aman', publish: 1985, entry:'2023'},
//     {title:'three', name:'joy', publish: 1981, entry:'2025'},
//     {title:'four', name:'manan', publish: 1980, entry:'2024'},
//     {title:'five', name:'kalu', publish: 1981, entry:'2020'}
// ]

// // const user = books.filter((bk)=>bk.entry === '2025' )
// // const user = books.filter((bk)=>bk.publish >1980 )
// // const user = books.filter((bk)=>bk.publish >1980 && bk.entry === '2025' )

// console.log(user);

// // output gives data directly like this,
// // [
// //   { title: 'one', name: 'viraj', publish: 1980, entry: '2025' },
// //   { title: 'three', name: 'joy', publish: 1981, entry: '2025' }
// // ]



// map

// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const newnum = numbers.map((num)=>num + 10)
// console.log(newnum);
// // [ 11, 12, 13, 14, 15,
// //   16, 17, 18, 19, 20 ]



// // CHAINING    / use methods one by one in line with'.'

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// //  const newnum = numbers.map((num)=>num * 10).map((num)=>num + 1).filter((num)=>num >= 40)

// //   or 
//  const newnum = numbers.map((num)=>num * 10)     
//                        .map((num)=>num + 1)      
//                        .filter((num)=>num >= 40)
// // unlimited chain all with all thins
// /* here in logic or execution : map1  >   map2   >  map3
//                                  result_/   result_/   
    
// map1-result > map2-result > map3- result is output
// */
//  console.log(newnum);



// reduce 

// const number = [1,2,3,4,5]

// const sum = number.reduce((accum,num) => {
// // console.log(`${accum} + ${num}`);  // too see numbers 
//     return accum+num
// },0)

//or
// const sum = number.reduce((accum,num) => (accum+num),0 )

// console.log(sum);
// 15

// // accumlator is empty 
// // initial = 0 ( operation , 0)
// // when loop start acc is empty then take initial value and perform task with intitial value.
// // then next loop acc take value as result of first loop and perform next operation until all done.



// shoping cart 

const shopping =[
    {course:'java', price:3000},
    {course:'python', price:4000},
    {course:'c++', price:2000},
    {course:'php', price:1000},
    {course:'quotine', price:4000},
    {course:'js', price:3000}
]

const bill = shopping.reduce((accu,item)=>(accu + item.price),0)
console.log(bill);
