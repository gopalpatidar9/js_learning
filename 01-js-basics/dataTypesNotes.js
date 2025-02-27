// Primitive

// 7 types : String, Number, Boolean, Null, Undefinde, Symbol, 
// BigInt

const userName = "Gopal" // String => Gopal

const score = 100 // Number => 100
const scoreValue = 100.3 // Number => 100.3

const isLoggedIn = true // boolean => true

const outsideTem = null // Null => null

let userEmail; 

const id = Symbol('123')   // symbol is use for Uniqe
const ontherId = Symbol('123')

console.log(id === ontherId); // false
console.log(id);
console.log(ontherId);

// const bigInt = 123456789987654321234551n


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["ironman", "shaktiman", "badman", "spiderman"]

const myobj = {
    username: "Gopal",
    email: "gopal@gmail.com"  
}

const myFunction = function(){
    console.log("Hello Gopal");
}


// +++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non Primitive)

let name = "Gopal"
let otherName = name
otherName = "Gopal Patidar"

console.log(name);
console.log(otherName);

let userOne = {
    email: "abc@gnail.com",
    password: "12345"
}

let userTwo = userOne
userTwo.email = "gopal@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);