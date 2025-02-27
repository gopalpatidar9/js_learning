// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toUTCString());

console.log(typeof myDate);

let myCreatedDate = new Date(2025, 1 , 27)
let myCreatedDate1 = new Date(2025, 1 , 27 , 11 , 20)
let myCreatedDate2 = new Date("2025-02-27")
let myCreatedDate3 = new Date("02-27-2025")


console.log(myCreatedDate.toLocaleDateString());
console.log(myCreatedDate1.toLocaleString());
console.log(myCreatedDate2.toDateString());
console.log(myCreatedDate3.toDateString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() / 1000));


let newDate = new Date()

console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {  // in this we can custmize the function
   weekday: "long",
})




