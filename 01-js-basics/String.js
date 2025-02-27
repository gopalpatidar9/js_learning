const name = "Gopal"
const repoCount = 50

// console.log(name + repocount + "value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('candycresh-saga-one') // this is create a gameName object string

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));
    
const newString = gameName.substring(0, 4)
console.log(newString);

const ontherString = gameName.slice(-8, 4) // slice method use for print string on index                                       
console.log(ontherString);                 // no. and its allwoed negative index

const newStringOne = "     Gopal     "
console.log(newStringOne);
console.log(newStringOne.trim());  // trim method use for the trim space in the string

const url = "http://gopal.com/gopal%20patidar"
console.log(url.replace('%20', '_'));  // replace method use for replace string

console.log(url.includes('gopal')); // includes method use for check string is avaleble or not in string

console.log(gameName.split('-'));  // split method aslo use string convart in array

console.log(gameName);
console.log(gameName.valueOf()); // in this print the value of object string
