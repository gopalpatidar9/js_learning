// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "abc123"
tinderUser.name = "Pushakr"
tinderUser.isLogedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "gopal@example.com",
    fullname: {
        userfullname: {
            firstname: "Gopal",
            lastname: "Patidar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "a@example.com"
    },
    {
        id: 2,
        email: "b@example.com"
    },
    {
        id: 3,
        email: "c@example.com"
    },
    {
        id: 4,
        email: "d@example.com"
    },
]

console.log(users[1].email); 

console.log(tinderUser);

console.log(Object.keys(tinderUser));  // return keys of object
console.log(Object.values(tinderUser)); // return values of object
console.log(Object.entries(tinderUser)); // return key and value in array

console.log(tinderUser.hasOwnProperty("nam")); // return false


// +++++++++++++++++++ de structure ++++++++++++++++++++++++++

const course = {
    coursename: "Js Learning Advance",
    price: "999",
    courseInstructor: "Gopal"
}

// course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);


// ++++++++++++++++ json format +++++++++++++++++++++

// {
//     "name": "gopal",
//     "fullname": "Gopal Patidar",
//     "age": 20
// }

// [
//     {}
//     {}
//     {}
// ]