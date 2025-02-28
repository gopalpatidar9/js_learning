// singletoan
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Gopal",
    "full name": "Gopal Patidar",
    [mySym]: "mykey1",
    age: 20,
    location: "indore",
    email: "gopal@example.com",
    isLogedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);      // using . access object
console.log(JsUser["email"]);   // [""] also using object
console.log(JsUser["full name"]);

console.log(typeof JsUser[mySym]);
console.log(typeof mySym);

JsUser.email = "gopal@google.com"
// Object.freeze(JsUser)
JsUser.email = "gopal@microsoft.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

