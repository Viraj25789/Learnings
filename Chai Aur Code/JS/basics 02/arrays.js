// collection of multiple items in single variable.

// resizable / mix datatype / nonprimtive


// // initialize
// let a = [1,2,'viraj',true, 2.43] 
// // or
// let b = new Array(4,5,'aman',false, 251)
// console.log(a);
// console.log(b);


// console.log(typeof a);     // object


// // acess element via index only no name..
// console.log(a[2]);  // index [0,1,2,3,...]


// console ma 
// let a = [1,2,'viraj',true, 2.43] 
// a => prototype -> prototype / length


// methods / prototypes / properties

// note : direct method use in consol.log() gives output in existing array or no proper output. / so use new var for each methods it gives output well and in proper new array. 

let a = [1, 2, 3, "abc", true, 456]

// a.push(89);
// a.pop(89)
// console.log(a);  // last ma add/remove


// a.unshift(true);   // first [0] par aavijay value / less use / [true,1,2,3,'abc',true,456]
// a.shift()      // first [0] nu delet kare / [ 2, 3, 'abc', true, 456 ]
// console.log(a);


// console.log(a.includes(3));    // search value in array / t/f
// console.log(a.indexOf(44));    // search index of value in array / [ ] / -1


// let b = a.join()
// console.log(b);     // bind / string ma convert / type of b is string and a is objject array.


// console.log('A ',a);   // A  [ 1, 2, 3, 'abc', true, 456 ]
// let b = a.slice(1,3);  // [ 2, 3 ] / giv subarray from index [1 to 2 / no 3]
// console.log(b);
// console.log('B ',a);   // B  [ 1, 2, 3, 'abc', true, 456 ] / origional same


// console.log('A ',a);   // A  [ 1, 2, 3, 'abc', true, 456 ]
// let c = a.splice(1,3); // [ 2, 3, 'abc' ] / giv subarray from index [1 to 3 / yes 3]
// console.log(c);
// console.log('B ',a);  // B  [ 1, true, 456 ] / origional chanege (delete spliced 1,2,3)



const marvel = ['ironmsn','thor','hulk']
const dc = ['supeman','batman','aquaman']

// marvel.push(dc);
// console.log(marvel); 
// // [ 'ironmsn', 'thor', 'hulk', [ 'supeman', 'batman', 'aquaman' ] ]   /  array in array / 
// // array take anything as data, as  array also / here dc is 4th element.
// console.log(marvel[3][1]);  // batman / acess value.
// no use above method


// let c = marvel.concat(dc);  // use this basic 
// console.log(c);  //  [ 'ironmsn', 'thor', 'hulk', 'supeman', 'batman', 'aquaman' ]  
// // or
// let d = [...marvel,...dc]    // spred  / use this more
// console.log(d); //  [ 'ironmsn', 'thor', 'hulk', 'supeman', 'batman', 'aquaman' ]



// let p = [1,2,3,[4,5],6,7,[8,9,[10,11,12]]];
// let s = p.flat(Infinity) // get flat array no [[]] / (_) here give num of depth of solve bracket. for all use infinity.
// console.log(s);
// // [1,2,3,4,5,6,7,8,9,10,11,12]



// when data downlod from another source then, diff form of data there so convt to array or search array or not. / dta scraping.

// console.log(Array.isArray('hitesh'));  // array or not / t/f
// console.log(Array.from('hitesh'));  //  conver to array / [ 'h', 'i', 't', 'e', 's', 'h' ]
// console.log(Array.from({name:'hitesh'}));  // []  / intrsting case /  here you first mention that make array of key or valuse.


// //convert to arrray from set of elements. 
// let x = 200;
// let y = 400;
// let z = 2100;
// console.log(Array.of(x,y,z));    // [ 200, 400, 2100 ]



/* in arrays copy operations creates,
shallo copy  : change in origional array (same refrence)
deep copy    : copy of value (stack)
*/

/*  above slice splice diffrence.  */


// array destructure

