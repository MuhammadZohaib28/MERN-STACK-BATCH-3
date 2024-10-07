for (let i = 1; i <= 10; i++) {
    console.log("The number is:" + i)
}

// WHILE LOOP

let userPassword = "qwerty12345@";
let userInput = prompt("Enter your password");

// ! not operator 
// ===
// || OR operator


while (userPassword !== userInput) {
    console.log("You have entered the wrong password");
    userInput = prompt("Enter your password again");
}
console.log("You have entered the correct password");


// DO WHILE LOOP

let countDown = 10;
do {
    console.log(`Countdown timer start now ${countDown}`);

    if (countDown == 5) {
        console.log("IQRAA")
    }

    countDown--;

} while (countDown >= 1);



console.log("Happy New Year");


let fruit1 = "Apple";
let fruit2 = "Banana";


console.log(`Salman likes to eat ${fruit1} and ${fruit2}`);

// let was introduced in ES6 Module
ARRAYS

let fruits = ["Banana", "Apple", "Lychee", "Mango", "Pineapple", "Grapes", "Orange", "Peach", "Kiwi", "Strawberry", "Banana", "Apple", "Lychee", "Mango", "Pineapple", "Grapes", "Orange", "Peach", "Kiwi", "Strawberry", "Banana", "Apple", "Lychee", "Mango", "Pineapple", "Grapes", "Orange", "Peach", "Kiwi", "Strawberry", "Banana", "Apple", "Kiwi", "Strawberry", "Banana", "Apple", "Lychee", "Mango", "Pineapple", "Grapes", "Orange", "Peach", "Kiwi", "Strawberry"];

console.log(fruits.length);

for (let i = 0; i <= fruits.length; i++) {
    console.log(fruits[i]);
}





console.log(`Salman likes to eat ${fruits[0]} and ${fruits[1]}`)