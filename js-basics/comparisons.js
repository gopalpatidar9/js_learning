// console.log( 2 > 1 );
// console.log( 2 >= 1 );
// console.log( 2 < 1 );
// console.log( 2 == 1 );
// console.log( 2 != 1 );

console.log("2" > 1); // => true
console.log(null > 0); // => false
console.log(null == 0); // => false
console.log(null >= 0); // => true

// not use that check first equlity

//  The reson is that an equality check == and compearisons > < >=
//  <= work differently
// Comparisons convert null to a number, treating it as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false

console.log(undefined == 0); // => false
console.log(undefined > 0); // => false
console.log(undefined < 0); // => false

// ===  check value and also datatype

console.log("2" == 2); // true
console.log("2" === 2); // false