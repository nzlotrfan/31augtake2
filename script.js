"use strict";
console.log("Connected!");

// Strict mode
// const interface = "audio";
// const public = "train";
// console.log(public);

// let hasDriversLicense;
// const passTest = true;

// if (passTest) {
//   hasDriversLisence = true;
// }

// if (hasDriversLicense) {
//   console.log("sally can drive!!!");
// }

const pastDate = new Date(1995, 11, 17, 3, 24, 0);
console.log(pastDate);

const myDate = new Date();
console.log(myDate);
console.log(myDate.getFullYear());
console.log(myDate.getMonth());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.toISOString());

const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "numeric",
  year: "numeric",
  weekday: "long",
};
const myFormattedDate = new Intl.DateTimeFormat("en-US", options).format(myDate);
console.log(myFormattedDate);

const myBirthdate = new Date(2000, 2, 16);
console.log(`My birthdate is the ${myBirthdate.getDate()}th.`);

// Solution 1
const months = ["January", "February", "March"];
const myMonth = months[myBirthdate.getMonth()];
console.log(`My birthdate is on the ${myBirthdate.getDate()}th of ${myMonth}`);

// Solution 2
const myMonth1 = new Intl.DateTimeFormat("en-NZ", { month: "long" }).format(myBirthdate);
console.log(`My birthdate is on the ${myBirthdate.getDate()}th of ${myMonth1}`);

console.log(Math.PI);

console.log(Math.max(5, 3, 7));
console.log(Math.min(5, 3, 7));
console.log(Math.floor(5.95));
console.log(Math.ceil(5.95));
console.log(Math.round(5.2));
console.log(Math.round(5.5));
console.log(Math.pow(3, 2));
console.log(Math.floor(Math.random() * 100 + 1));

Math.max(5, 3, 7); // 7
Math.min(5, 3, 7); // 3
Math.floor(5.05); // Always rounds down. Returns 5
Math.floor(5.95); // Always rounds down. Returns 5
Math.ceil(5.01); // Always rounds up. Returns 6
Math.round(5.95); // Rounds up. Returns 6
Math.round(5.05); // Rounds down. Returns 5
Math.round(5.5); // Rounds up. Returns 6
(1.3579).toFixed(2); // Fixes the number of decimal places to 2. Returns 1.36
Math.pow(3, 2); // base, exponent. Returns 9
Math.random(); // pseudo random number between 0 & 1. Output unknown

// Exercise 2

const myFavNumbers = [5, 26, 38];
const smallest = Math.min(...myFavNumbers);
const largest = Math.max(...myFavNumbers);

console.log(smallest * smallest, Math.pow(smallest, 2), smallest ** 2);

// Exercise 4
// Create an array of 4 fruits, and log to the console a random fruit each time.
const fruits = ["apple", "mango", "banana", "grapes", "peaches"];

console.log(fruits[Math.floor(Math.random() * fruits.length)]);

const myString = "Good Morning";
const myNewString = myString.toUpperCase();
console.log(myNewString, myString);

const myNumber = 50.258312315156;
const myNewNumber = myNumber.toFixed(2);
console.log(myNewNumber, myNumber);

// Non-primitive Data-types
const myArray = [1, 2, 3];
const myNewArray = myArray;
myNewArray.push(4, 5, 6);
console.log(myNewArray, myArray);

const myObject = { name: "Rob", age: 50 };
const myNewObject = myObject;
myNewObject.age = 60;
console.log(myNewObject, myObject);

const fruit = "banana";

if (fruit === "Banana") {
  console.log("It's a banana!");
} else {
  console.log("It is not!");
}
