function sayMyName() {
    console.log("G");
    console.log("O");
    console.log("P");
    console.log("A");
    console.log("L");   
}

// sayMyName()

// function addTwoNumber(num1, num2) {
//     console.log(num1 + num2);
// }

// addTwoNumber(3, 5)

function addTwoNumber(num1, num2) {

    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumber(3, 5)
console.log("result:", result);

function logInUserMessage(username) {
    // if(username == undefined){
    //    console.log("Please enter a user name");
    //    return
    // }
    if(!username){  // its work as a usrename == undefined 
        console.log("Please Enter a username");
        return
    }
    return `${username} Just Logged In`
}

// console.log(logInUserMessage("Gopal")); 
// console.log(logInUserMessage()); 


function calculateCartPrice(val1, val2, ...num1) { // ... is rest oprattor 
    return num1
}

console.log(calculateCartPrice(100, 300, 500, 1000)); 


const user = {
    username: "Gopal",
    price: "199"
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "Virat",
    price: "299"
})

const myNewArray = [200, 300, 500, 400]

function returnSecondValue(anyarray) {
    return anyarray[1]
    // console.log(anyarray[1]);
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100, 200, 300, 400]));

