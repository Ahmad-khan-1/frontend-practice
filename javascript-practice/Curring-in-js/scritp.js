//Currying in js : currying is a way to break a function with multiple arguments into a 
// function that each take one arguments at a time 

function curred (a) {
    return function (b) {
        return a+b
    }
}

const add = curred(5)
console.log(add(3));

//example with arrow function
const power = a => b => a ** b;

const square = power(2);

console.log(square(3)); // 8
console.log(square(4)); // 16


//mutiply 3 numbers using currying 
function mutiply (a) {
    return function  (b){
        return function (c) {
            return a* b *c 
        }
    }
}

console.log(mutiply(3)(4)(6)); //72