// const userEmail = "gopal123@example.com" 
// const userEmail = ""
const userEmail = []

if(userEmail){
    console.log("Got user email");
}else{
    console.log("don't got user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values
// "0", 'false', " ", [], {}, function(){}

if(userEmail.length === 0){
    console.log("Array is Empty");
}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
   console.log("Object is empty");
}

// nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10  // assinged 5
// val1 = null ?? 10  // assinged 10
// val1 = undefined ?? 10 // assinged 10
val1 = null ?? 10 ?? 20 // assinged 10
console.log(val1);


// Terniary Operator
// condition ? true : false

const iceTeaPrice = 250
iceTeaPrice <= 200 ? console.log("less than 200") : console.log("greater than 200");