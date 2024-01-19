//Faulty calculator tha do always wrong claculations.

//creating random number from zero to one.
let random = Math.random();
let a =prompt("Enter the first number");
let b =prompt("Enter the operator");
let c =prompt("Enter the second number");

let mismatch = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "^",
}

//let the calculator do correct calculation.
if(random>0.1){
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}
//now the calculator will do wrong calculation.
else{
    b = mismatch[b];
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}