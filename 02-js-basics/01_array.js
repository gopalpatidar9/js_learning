// Array

const myArr = [0,1,2,3,4,5]
const myHeors = ['shaktiman', 'naagraj']

const myArr2 = new Array(1,2,3,4,5)

console.log(myArr[1]);

// Array Methods

myArr.push(6) // push method add the element in array at last
myArr.push(7)
myArr.pop()   // pop method remove the element in array at last or end 
myArr.unshift(7) // unshift add the element in array at first or start
myArr.shift()   // shift remove element in array at start or first

console.log(myArr.includes(3)); // includes check value is exist or not in array
console.log(myArr.indexOf(4));

const newArr = myArr.join()  // join covert array in string


console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)  // slice return a section of array
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // splice return a section of array including rang
                                // but splice manipluate the origanl array
console.log(myn2);

console.log("C ", myArr);