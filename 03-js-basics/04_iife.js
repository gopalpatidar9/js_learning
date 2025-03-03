// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    // named IIFE Function
    console.log(`DB CONNECTED`);
})();

// chai()

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('Gopal')

