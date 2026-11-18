// 1 jan 1970 , milisecond
// month start with 0 => jan

let date=new Date();      // object instanse

console.log(date);         // 2025-08-06T14:55:11.404Z
console.log(typeof date); // object


console.log(date.getTime());      // 1754492111404
console.log(date.toString());     // Wed Aug 06 2025 20:25:11 GMT+0530 (India Standard Time)
console.log(date.toISOString());  // 2025-08-06T14:55:11.404Z
console.log(date.toJSON());       // 2025-08-06T14:55:11.404Z
console.log(date.toDateString()); // Wed Aug 06 2025
console.log(date.toTimeString()); // 20:25:11 GMT+0530 (India Standard Time)
console.log(date.toLocaleString()); // 6/8/2025, 8:25:11 pm


// create date

// let datecreat=new Date(2023, 0,23);  
// console.log(datecreat.toString());     // Mon Jan 23 2023 05:45:00 GMT+0530 (India Standard Time)


// let datecreat=new Date(2023, 0,23,5,45); 
// console.log(datecreat.toLocaleString()); // 23/1/2023, 5:45:00 am

// let datecreat=new Date("2023-01-14");
// console.log(datecreat.toLocaleString());  // 14/1/2023, 5:30:00 am

// let datecreat=new Date("01-14-2023");
// console.log(datecreat.toLocaleString());   // 14/1/2023, 12:00:00 am


// // time stam / quiz / counter / pool / fastest

// let datecreat=new Date("01-14-2023"); 

// let ts = Date.now();

// console.log(datecreat.getTime());
// console.log(Math.floor(ts/1000));



// // get specific ,..
// let datecreat=new Date(); 
// console.log(datecreat);
// console.log(datecreat.getMonth() + 1);
// console.log(datecreat.getDay());


datecreat.toLocaleString('_')  // _ more customization in this / mdn / google