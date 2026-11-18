// for each 

const code = ['java','python','c++','ruby']

// code.forEach(function (ele) { 
//     console.log(ele);          
// })

//or 

// code.forEach((ele)=> {console.log(ele);})

//or 

// function printme(ele) {
//     console.log(ele);
// }
// code.forEach(printme)


// all element print.
// this is callback func then no func name here.
// console / code > prototype / map,foreach


// code.forEach((ele,index,arr)=> {console.log(ele,index,arr);})



// case [{},{},{}] , iteration

const arr = [
    {
        name:'JAVA',
        id:'1'
    },
    {
        name:'R',
        id:'2'
    },
    {
        name:'C++',
        id:'3'
    },
    {
        name:'PYTHON',
        id:'4'
    }
]
arr.forEach((item)=>{
    console.log(item);
    console.log(item.name);
})
// array>object>key