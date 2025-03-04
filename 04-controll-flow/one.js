// if 

const isUserLogedIn = true
const temperature = 41

// if(temperature < 50){
//   console.log("tempreature is less than 50");
// } else{
//     console.log("tempreature is greater than 50");
// }

// <, >, <=, >=, ==, ===, !=, !==

let score = 200

if(score > 100){
  const power = "fly"
  console.log(`User power ${power}`);
}
// console.log(`User power ${power}`);  show error power is not defiend


const balance = 1000

if(balance > 500) console.log("test"), console.log("test2");
// not preper this type of if only prefer for single line code

if(balance < 500){
    console.log("less then 500");
}else if(balance < 750){
    console.log("less than 750");
}else if(balance < 900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}


let userLogedIn = true
let debitCrad = true
let loggedInFromGoogle = false
let loggedInFromEmail = true

if(userLogedIn && debitCrad){
    console.log("Allow to by course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged In");
}

