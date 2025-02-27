const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// const allheros = marvel_heros.concat(dc_heros) // concat add the array elemenst
                                               // without manipluate orignal array 
                                               // its return new array
// console.log(allheros);

const new_marvel_heros = [...marvel_heros, ...dc_heros] // sprad oprator
console.log(new_marvel_heros);

const another_array = [1,2,3,[4,5,6],7,8,[9,10]]

const usable_another_array = another_array.flat(Infinity)

console.log(usable_another_array); // flat user for make one array of multiple array


console.log(Array.isArray("gopal")); // it is check its array or not
console.log(Array.from("gopal"));   // It is use for convert in array
console.log(Array.from({name: "gopal"}));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // Array.of convert variable
                                               // in array

const arr = [2,3,4,5] 

console.log(Array.isArray(arr)); // return true