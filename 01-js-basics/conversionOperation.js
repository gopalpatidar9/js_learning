let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// ture => 1; false => 0
// null => 0
// "" => 0
// undefined => NaN

let isLoggedIn = "Gopal"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Gopal" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof(stringNumber));
console.log(stringNumber);

// ********************* Operations **********************

let value = 3
let negValue = -value

// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Gopal"

// console.log(str1 + str2);

// console.log(1 + "2");
// console.log("1" + 2);
// console.log("1" + 2 + 2);
// console.log(1 + 2  + "2");
// console.log(1 + "2" + 2);

// console.log(( 3 + 3 ) * 4 % 3);

// console.log(+true);
// console.log(true+);
// console.log(+"");

let gameCounter = 100
++gameCounter;
console.log(gameCounter);
gameCounter++;
console.log(gameCounter);
