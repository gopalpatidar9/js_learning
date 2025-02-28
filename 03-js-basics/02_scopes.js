// var c = 300

let a = 300

if(true){
    let a = 10  // that is not use aoutside of scop
    const b = 20 // it is also not use outeside of scop
    console.log("INNER a", a);
    // var c = 30  // this is accessible outside of scop
}

console.log("global a", a);
// console.log(b);
// console.log(c);