// scope

// var c = 300

let a = 300

if(true){
    let a = 10  // that is not use aoutside of scop
    const b = 20 // it is also not use outeside of scop
    console.log("INNER a", a);
    // var c = 30  // this is accessible outside of scop
}

console.log("global a", a);
// console.log(b);
// console.log(c);


function one() {
    const username = "Gopal"

    function two() {
        const website = "Youtube"
        console.log("username is", username, "website is", website);
    }
  // console.log(website); // there we cant access website variable
                         // out fi the scope 
   two() 
}
 
one()

if(true){
    const username = "Virat"
    if(username == "Virat"){
        const website = " Youtube"
        console.log(username + website);
    }
    // console.log(website);  show error becouse we cant access outof
                              // scope
}
// console.log(username);   there is also outof scope show error

// ++++++++++++++++++++ intersting +++++++++++++++++++++++++++

console.log(addOne(5)); // there we can call the fuction before
                        // initilization
function addOne(num) {
    return num + 1
}
console.log(addOne(5)); 

// addTwo(5)  // there show error Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))