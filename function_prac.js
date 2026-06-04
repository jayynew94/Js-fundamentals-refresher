//Write a function called greet that takes a name and returns "Hello, Jay!" 
// — use a default parameter so if no name is passed, it says "Hello, stranger!"

function greet(name = "stranger"){
    return `Hello, ${name}!`;
}

console.log(greet()); // Hello, stranger!
console.log(greet("Jay")); // Hello, Jay!

//Write a function called calcTip that takes a billAmount and a tipPercent (default 18%) and returns the tip amount. 
// Test it with a $50 bill.

function calcTip(billAmount, tipPercent = 0.18){
    return billAmount * tipPercent;
}

console.log(calcTip(50)); // 9
console.log(calcTip(50, 0.2)); // 10

//Write a one-line arrow function called double that takes a number and returns it doubled.
//  Then write a doubleAll function that takes an array of numbers and returns all of them doubled.

const double = num => num * 2;

const doubleAll = arr => arr.map(double);

console.log(double(5));
console.log(doubleAll([1, 2, 3])); // [2, 4, 6]
