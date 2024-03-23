// console.log(`Hello`);
// console.log(`I like pizza!`);

// window.alert(`This is an Alert!`);
// window.alert(`I like pizza!`);

/*
 * This is a comment
 */

// document.getElementById("myH1").textContent = "Hello";
// document.getElementById("myP").textContent = "I like pizza!";

// variable = A container that stores a value.
// Behaves as if it were the value it contains.

//  1. Declaration  let x;
//  2. Assignment  x = 100;

// let x = 100;
// let x;
// x = 100;

// console.log(x);
// let age = 30;
// let price = 10.99;
// let gpa = 2.1;

// console.log(age);
// console.log(price);
// console.log(gpa);

// console.log(typeof age);
// console.log(`You are ${age} years old`);
// console.log(`The Price is $${price}`);
// console.log(`Your GPA is ${gpa}`);

// let firstName = "John";
// let favoriteFood = "Pizza";
// let email = "bro123@gmail.com";

// console.log(typeof firstName);
// console.log(`Your name is ${firstName}`);
// console.log(typeof favoriteFood);
// console.log(`Your like ${favoriteFood}`);
// console.log(`Your email is ${email}`);

// Booleans are either true or false.
// let online = true;
// let forSale = true;
// let isStudent = true;

// console.log(`Bro is online: ${online}`);
// console.log(`Is this car for sale: ${forSale}`);
// console.log(`Enrolled: ${isStudent}`);

// let fullName = "John Thiraios";
// let age = 30;
// let student = false;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `You are ${age} years old`;
// document.getElementById("p3").textContent = `Enrolled: ${student}`;

//
// Arithmetic Operators = operands (values,variables, etc.)
// operators (+ - * / %)
// ex. 11 = x + 5;

// let students = 30;
// students = students +1;
// students = students -1;
// students = students * 2;
// students = students / 2;
// students = students ** 3; exponent operator
// let extraStudents = students % 3; modulus operator
// console.log(extraStudents);
// students += 2;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;
// students++; increment
// students--;

// console.log(students);

// Operator precedence
// 1. Parenthesis ()
// 2. Exponents
// 3. Multiplication & Division & modulo
// 4. Adition & Subtraction

// let result = 1 + 2 * 3 + 16;
// let result = (12 % 5) + 8 / 2;
// let result = 6 / 2 ** 7;

// console.log(result);

// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFESSIONAL WAY = HTML textbox

// let username;
// username = window.prompt("What is your name?");

// console.log(username);

// document.getElementById("mySubmit").onclick = function () {
//   username = document.getElementById("myText").value;
//   document.getElementById("myh1").textContent = `Hello ${username}`;
//   console.log(username);
// };

// type conversion = change the datatype of a value to another (strings, numbers, booleans, etc)

// let age = window.prompt("How old are you?");
// age = Number(age);
// age += 1;
// console.log(age, typeof age);

// let x = "0";
// let y = "0";
// let z = "0";
// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// Const = a variable that can't be changed

// radius = window.prompt("What is the radius of the circle?");
// radius = Number(radius);
// circumference = 2 * pi * radius;

// Math = built-in functions that provides basic mathematical functions.A collection of properties and methods.
// console.log(Math.PI);
// console.log(Math.E);

// let x = 3;
// let y = 2;
// let z = 1;
// z = Math.round(x);
// z = Math.floor(x);
// z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x, y);
// z = Math.sqrt(x);
// z = Math.log(x);
// z = Math.sin(x);
// z = Math.tan(x);
// z = Math.abs(x);
// z = Math.sign(x);
// let max = Math.max(x, y, z);
// let max = Math.min(x, y, z);
// console.log(min);

// const PI = 3.14159;
// let radius;
// let circumference;
// document.getElementById("mySubmit").onclick = function () {
//   radius = document.getElementById("myText").value;
//   radius = Number(radius);
//   circumference = 2 * PI * radius;
//   document.getElementById("myh3").textContent = circumference + "cm";
// };

// let age = 13;

// if (age >= 18) {
//   console.log("You are eligible to vote!");
// } else {
//   console.log("You are not eligible to vote!");
// }

// let time = 4;

// if (time < 12) {
//   console.log("Good morning!");
// } else if (time >= 12 && time < 18) {
//   console.log("Good afternoon!");
// }

// let isStudent = false;

// if (isStudent === true) {
//   console.log("Enrolled");
// } else {
//   console.log("Not Enrolled");
// }

// let age = 15;
// let hasLicense = true;

// if (age >= 16) {
//   console.log("You are eligible to get a license!");

//   if (hasLicense) {
//     console.log("You already have a license!");
//   } else {
//     console.log("You do not have your license!");
//   }
// } else console.log("You are not eligible to get a license!");

//  in this example first if will execute since age >= 18 , but since age >= 100 the third should apply, therefore we (example below)
// let age = 101;

// if (age >= 18) {
//   console.log("You are old enough to enter this site!");
// } else if (age < 0) {
//   console.log("Age can't be below 0!");
// } else if (age >= 100) {
//   conslone.log("You are too old to enter this site!");
// } else {
//   console.log("You must be 18+ to enter this site!");
// }

//  = is the asignment operator , to see if 2 values are equal, use ==

// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");

// mySubmit.onclick = function () {
//   age = myText.value;
//   age = Number(age);
//   if (age >= 100) {
//     resultElement.textContent = "You are too old to enter this site!";
//   } else if (age == 0) {
//     resultElement.textContent = "You can't enter.You were just born";
//   } else if (age >= 18) {
//     resultElement.textContent = "You are old enough to enter this site!";
//   } else if (age < 0) {
//     resultElement.textContent = "Age can't be below 0!";
//   } else {
//     resultElement.textContent = "You must be 18+ to enter this site!";
//   }
// };

// .checked = property that determines the checked state of an HTML checkbox or radio button

// const myCheckbox = document.getElementById("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");
// const masterCardBtn = document.getElementById("masterCardBtn");
// const paypalBtn = document.getElementById("paypalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function () {
//   if (myCheckBox.checked) {
//     subResult.textContent = "You are subscribed!";
//   } else {
//     subResult.textContent = "You are not subscribed!";
//   }

//   if (visaBtn.checked) {
//     paymentResult.textContent = "You are paying with Visa!";
//   } else if (masterCardBtn.checked) {
//     paymentResult.textContent = "You are paying with MasterCard!";
//   } else if (paypalBtn.checked) {
//     paymentResult.textContent = "You are paying with Paypal!";
//   } else {
//     paymentResult.textContent = "You must select a payment type!";
//   }
// };

// ternary operator = a shortcut to if{} and else{} statements,
// helps to assign a variable based on a condition
// condition ? codeIfTrue : codeIfFalse;

// let age = 21;
// let message = age >= 18 ? "You're an adult" : "You're not an adult";
//  this is equal to:
// let age = 12;
// let message;

// if (age >= 18) {
//   message = "You're an adult";
// } else {
//   message = "You're not an adult";
// }
// console.log(message);

// let time = 9;
// let greeting = time < 12 ? "Good morning!" : "Good afternoon!";
// console.log(greeting);

// let isStudent = false;
// let message = isStudent ? "Enrolled" : "Not Enrolled";
// console.log(message);

// let purchaseAmount = 150;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(
//   `Your total is $${purchaseAmount - (purchaseAmount * discount) / 100}`
// );

// SWITCH = can be an efficient way to replace many else if statements

// let day = "Pizza";
// if (day == 1) {
//   console.log("It is Monday");
// } else if (day == 2) {
//   console.log("It is Tuesday");
// } else if (day == 3) {
//   console.log("It is Wednesday");
// } else if (day == 4) {
//   console.log("It is Thursday");
// } else if (day == 5) {
//   console.log("It is Friday");
// } else if (day == 6) {
//   console.log("It is Saturday");
// } else if (day == 7) {
//   console.log("It is Sunday");
// } else {
//   console.log(`${day} is not a day`);
// }
// let day = "pizza";

// switch (day) {
//   case 1:
//     console.log("It is Monday");
//     break;
//   case 2:
//     console.log("It is Tuesday");
//     break;
//   case 3:
//     console.log("It is Wednesday");
//     break;
//   case 4:
//     console.log("It is Thursday");
//     break;
//   case 5:
//     console.log("It is Friday");
//     break;
//   case 6:
//     console.log("It is Saturday");
//     break;
//   case 7:
//     console.log("It is Sunday");
//     break;
//   default:
//     console.log(`${day} is not a day`);
//     break;
// }
// Break is used to break out of the switch statement
// When a matching case is found, the break statement is executed
// Without a Break statement, any cases below would be executed

// let testScore = 85;
// let letterGrade;

// switch (true) {
//   case testScore >= 90:
//     letterGrade = "A";
//     break;
//   case testScore >= 80:
//     letterGrade = "B";
//     break;
//   case testScore >= 70:
//     letterGrade = "C";
//     break;
//   case testScore >= 60:
//     letterGrade = "D";
//     break;
//   default:
//     letterGrade = "F";
// }
// console.log(letterGrade);

// string methods allow you to manipulate and work with text (strings)
// charAt(index) finds the character at the specified index
// indexOf(index) finds the first occurrence of the specified character
// lastIndexOf(index) finds the last occurrence of the specified character
// length() returns the number of characters in the string
// trim removes leading and trailing whitespace characters from the string
// toUpperCase() converts the string to upper case
// toLowerCase() converts the string to lower case
// repeat() repeats the specified string the specified times
// startsWith,Endswith,Includes ,checks to see if the string starts with the specified character, ends with the specified character, or includes the specified
// replaceAll(search, replacement) replaces all occurrences of the search string with the replacement string
// padStart,padEnd = pads the start or end of the string with the specified character

// (strings) allow you to manipulate and work with text
// let phoneNumber = "123-456-7890";

// phoneNumber = phoneNumber.padStart(15, "0");
// console.log(phoneNumber);

// string slicing = creating a substring from a portion of another string
// string.slice(start, end)

// const fullName = "John Doe";

// // let firstName = fullName.slice(0, 4);
// // let lastName = fullName.slice(5);
// // let firstChar = fullName.slice(0, 1);
// // let lastChar = fullName.slice(-1);

// let firstName = fullName.slice(0, fullName.indexOf(" "));

// let lastName = fullName.slice(fullName.indexOf(" ") + 1);

// console.log(firstName);
// console.log(lastName);

// const email = "hello@gmail.com";
// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);
// console.log(username);
// console.log(extension);

// Method Chaining = Calling one method after another in one continuous line

//  No method Chaining example
// let username = window.prompt("Please enter your username: ");
// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;

// console.log(username);

// Method Chaining Example
// let username = window.prompt("Please enter your username: ");
// username =
//   username.trim().charAt(0).toUpperCase() +
//   username.trim().slice(1).toLowerCase();
// console.log(username);

// Logical Operators = Used to combine or manipulate Boolean values (true/false)
//  AND = &&
//  OR = ||
//  NOT = !

// Without Logical Operators
// const temp = 20;
// if (temp > 0) {
//   console.log("The Weather is Good!");
// } else if (temp <= 30) {
//   console.log("The Weather is Good!");
// } else {
//   console.log("The Weather is Bad!");
// }

// With Logical Operators
// And &&
// const temp = 1;
// if (temp > 0 && temp <= 30) {
//   console.log("The Weather is Good!");
// } else {
//   console.log("The Weather is Bad!");
// }
// Or ||
// const temp = 25;
// if (temp <= 0 || temp > 30) {
//   console.log("The Weather is Bad!");
// } else {
//   console.log("The Weather is Good!");
// }
// Not !
// const isSunny = true;
// if (!isSunny) {
//   console.log("It's Cloudy!");
// } else {
//   console.log("It's Sunny!");
// }

// = assignment operator (asignes a value to a variable)
// == comparison operator (compares if values are equal)
// === strict equality operator (compares if values and datatypes are equal)
// != inqeualityy operator (compares if values are not equal)
// !== strict inequality operator (compares if values and datatypes are not equal)

// const PI = 3.14;
// if (PI == "3.14") { //works with == . wont work with ===)
//   console.log("That is PI");
// } else {
//   console.log("That is not PI");
// }
// const PI = 3.14;
// if (PI === 3.14) {
//   //works since its the specified Number
//   console.log("That is PI");
// } else {
//   console.log("That is not PI");
// }
// const PI = 3.14;
// if (PI !== "3.14") {
//   console.log("That is not PI");
// } else {
//   console.log("That is PI");
// }
//  while loop = repeat some code WHILE some condition is true
// let username = "";
// while (username === "") {
//   console.log("Please enter your username");
// }
// console.log(`Hello ${username}!`);
//  in this example program gets stuck in the loop even after you write your username

// let username = "";
// while (username === "") {
//   username = window.prompt("Please enter your username: ");
// }
// console.log(`Hello ${username}!`);
// prompt wont go away until the user enters something
// Username will equal null if the cancel button is pressed
// let username = "";
// while (username === "" || username === null) {
//   username = window.prompt("Please enter your username: ");
// }
// console.log(`Hello ${username}!`);
// canceling the prompt will make it reappeare until user enters something
// let username;
// do {
//   username = window.prompt("Please enter your username: ");
// } while (username === "" || username === null);
// console.log(`Hello ${username}!`);

// let loggedIn = false;
// let username;
// let password;
// while (!loggedIn) {
//   username = window.prompt(`Please enter your username`);
//   password = window.prompt(`Please enter your password`);

//   if (username === "myU" && password === "myP") {
//     loggedIn = true;
//     console.log("Your are logged in successfully");
//   } else {
//     console.log("Invalid Credentials! Try again!");
//   }
// }
// let loggedIn = false;
// let username;
// let password;
// do {
//   username = window.prompt(`Please enter your username`);
//   password = window.prompt(`Please enter your password`);

//   if (username === "myU" && password === "myP") {
//     loggedIn = true;
//     console.log("Your are logged in successfully");
//   } else {
//     console.log("Invalid Credentials! Try again!");
//   }
// } while (!loggedIn);

// for loop = repeat some code for a LIMITED number of times
// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }
// console.log("Happy new Year!");
// for (let i = 1; i <= 20; i++) {
//   if (i == 13) {
//     continue; // skips specified number
//     // break; // breaks out of the loop
//   } else {
//     console.log(i);
//   }
// }
// function = A section of reusable Code.
// Declare the code once, then use it whenever needed by calling the function.
// function happyBirthday(username, age) {
//   console.log("Happy Birthday to you!!");
//   console.log("Happy Birthday to you!!");
//   console.log(`Happy Birthday dear ${username}!!`);
//   console.log("Happy Birthday to you!!");
//   console.log(`You are ${age} years old`);
// }
// happyBirthday("John", 30);
// happyBirthday("Spongebob", 20);
// happyBirthday("Patrick", 19);
// function add(x, y) {
//   // let result = x + y;
//   // return result;
//   return x + y;
// }
// function subtract(x, y) {
//   return x - y;
// }
// function multiply(x, y) {
//   return x * y;
// }
// function divide(x, y) {
//   return x / y;
// }
// // let answer = add(2, 3);
// // let answer = subtract(2, 3);
// // let answer = multiply(2, 3);
// let answer = divide(2, 3);
// console.log(answer);
// function isEven(number) {
//   // if (number % 2 === 0) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
//   return number % 2 === 0 ? true : false;
// }
// console.log(isEven(14));
// function isValidEmail(email) {
//   // if (email.includes("@")) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
//   return email.includes("@") ? true : false;
// }
// console.log(isValidEmail("hello@mail.com"));
// console.log(isValidEmail("ElonMusk.com"));
// console.log(isValidEmail("Zuckerborg@Meta.com"));

// variable scope is where a variable is recognized and accessible (local vs global)
// Local = inside the function
// Global = outside of the function
// array = a variable structure than can hold more than one value

// let fruits = ["apple", "banana", "orange", "coconut"];
//fruits[1] = "coconut";
// fruits.push("coconut"); // adds a value to the end of the array
// fruits.pop(); //remove the value from the end of the array
// fruits.unshift("mango"); // adds a value to the beginning of the array
// fruits.shift(); //remove the value from the beginning of the array
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// let numOfFruits = fruits.length;
// let index = fruits.indexOf("apple");
// console.log(index);
// fruits.sort().reverse();
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// spread operator = ... allows an iterable such as an array to be expanded into seperate elements (unpacks)
// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);
// console.log(maximum);
// console.log(minimum);
// let username = "John Doe";
// let letters = [...username].join("-");
// console.log(letters);
// let fruits = ["apple", "banana", "orange"];
// let vegetables = ["carrots", "celery", "potatoes"];

// let foods = [...fruits, ...vegetables, "eggs", "milk"];
// console.log(foods);

// function openFridge(...foods) {
//   console.log(...foods);
// }
// function getFood(...foods) {
//   return foods;
// }

// rest parameters = (...rest) allow a function to work with a variable number of arguements by bundling them into an array
// spread = expands an array into seperate elements
// rest = bundles seperate elements into an array
// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "ramen";
// openFridge(food1, food2, food3, food4, food5);
// const foods = getFood(food1, food2, food3, food4, food5);
// console.log(foods);

// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }
// const total = sum(1, 2, 3, 4, 5);
// console.log(`Your total is $${total}`);

// function getAverage(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result / numbers.length;
// }
// const total = getAverage(75, 100, 85, 90, 50);
// console.log(`Your average is ${total}`);

// function combineStrings(...strings) {
//   return strings.join(" ");
// }
// const fullname = combineStrings("Mr.", "Spongebob", "Squarepants", "III");
// console.log(fullname);
