const acountId = "1432" // It is not Changable
let acountEmail = "gopal@gmail.com"
var acountPassword = "12345"
acountCity = "Indore" // Not use this Type
let acountState

// acountId = "1423" // Not allowed 

acountEmail = "abc@gmail.com"
acountPassword = "54321"
acountCity = "Mandsoure"

console.log(acountId, acountEmail);

/* 
Prefer not to use var
because of issue in block scope and function scope
*/

console.table([acountId, acountEmail, acountPassword, acountCity, acountState])