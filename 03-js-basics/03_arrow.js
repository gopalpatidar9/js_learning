const user = {
    username: "Gopal",
    price: "999",

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage()
user.username = "Hemant"
user.welcomeMessage()

console.log(this);

// function chai() {
//     let username = "Gopal"
//     console.log(this.username);   // we cant use this in fuction like this
// }
// chai()

// const chai = function(){
//     let username = "Gopal"
//     console.log(this.username); // also cant use this in this type function
// }
// chai()

// const chai = () => {
//     let username = "Gopal"
//     console.log(this.username);  // there is also not access this 
// }
// chai()

const addTwo = (num1, num2) => {  // this is basic arrow Function
    return num1 + num2
}
console.log(addTwo(3, 4));

// const addThree = (num1, num2, num3) => num1 + num2 + num3 // impliciate return
// const addThree = (num1, num2, num3) => (num1 + num2 + num3)
const addThree = (num1, num2, num3) => ({username: "Gopal"})

console.log(addThree(2,3,4));

