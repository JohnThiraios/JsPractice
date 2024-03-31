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

// Callback = a function that is passed as an argument to another function.
// used to handle asynchronous operations such as:
// 1) Reading a file
// 2) Network Requests
// 3) Interacting with databases
// When one operation is complete, the callback function is called.

// hello();
// goodbye();
// function hello() {
//   setTimeout(function () {
//     console.log("Hello World!");
//   }, 3000); //delays the function for 3 seconds
// }
// function goodbye() {
//   console.log("Goodbye World!");
// }
// hello(leave);
// function hello(callback) {
//   console.log("Hello World!");
//   callback();
// }
// function leave() {
//   console.log("Leave!");
// }
// sum(displayPage, 1, 2);

// function sum(callback, x, y) {
//   let result = x + y;
//   callback(result);
// }

// function displayConsole(result) {
//   console.log(result);
// }
// function displayPage(result) {
//   document.getElementById("myH1").textContent = result;
// }
// forEach() = method used to iterate over the elements
//  of an array and apply a specified function (callback) to each element.
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(cube);
// numbers.forEach(display);
// function double(element, index, array) {
//   array[index] = element * 2;
// }
// function triple(element, index, array) {
//   array[index] = element * 3;
// }
// function square(element, index, array) {
//   array[index] = element * element;
//   // array[index] = Math.pow(element, 2);
// }
// function cube(element, index, array) {
//   array[index] = element * element * element;
//   // array[index] = Math.pow(element, 3);
// }
// function display(element) {
//   console.log(element);
// }

// let fruits = ["apple", "banana", "orange", "coconut"];
// fruits.forEach(capitalize);
// fruits.forEach(display);
// function upperCase(element, index, array) {
//   array[index] = element.toUpperCase();
// }
// function lowerCase(element, index, array) {
//   array[index] = element.toLowerCase();
// }
// function capitalize(element, index, array) {
//   array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }
// function display(element) {
//   console.log(element);
// }

// .map() = accepts a callback and applies it to each element of an array
// then it returns a new array with the results of the callback

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// function square(element) {
//   // return number * number;
//   return Math.pow(element, 2);
// }
// function cube(element) {
//   return Math.pow(element, 3);
// }
// console.log(squares);
// console.log(cubes);

// const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
// const studentsUpper = students.map(upperCase);
// function upperCase(element) {
//   return element.toUpperCase();
// }
// console.log(studentsUpper);

// const dates = ["2024-1-10", "2025-2-25", "2022-11-9"];
// const formattedDates = dates.map(formatDate);
// function formatDate(element) {
//   const parts = element.split("-");
//   return `${parts[2]}-${parts[1]}-${parts[0]}`;
// }
// console.log(formattedDates);

// .filter() = creates a new array with all elements that pass a test
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);
// function isEven(element) {
//   return element % 2 === 0;
// }
// function isOdd(element) {
//   return element % 2 !== 0;
// }
// console.log(oddNums);
// console.log(evenNums);

// const ages = [16, 17, 18, 19, 20, 21, 25, 40, 50];
// const adults = ages.filter(isAdult);
// const children = ages.filter(isChild);
// function isAdult(element) {
//   return element >= 18;
// }
// function isChild(element) {
//   return element < 18;
// }
// console.log(adults);
// console.log(children);

// const words = ["apple", "banana", "orange", "coconut", "kiwi"];
// const shortWords = words.filter(getShortWords);
// const longwords = words.filter(getLongWords);
// function getShortWords(element) {
//   return element.length <= 6;
// }
// function getLongWords(element) {
//   return element.length > 6;
// }
// console.log(shortWords);
// console.log(longwords);

// .reduce = reduce the elements in an array to a single value

// const prices = [100, 200, 30, 35, 40, 50];
// const total = prices.reduce(sum);
// function sum(previous, next) {
//   return previous + next;
// }
// console.log(`$${total.toFixed(2)}`);

// const grades = [75, 50, 90, 80, 80, 70, 85];
// const max = grades.reduce(getMax);
// const min = grades.reduce(getMin);
// function getMax(accumulator, next) {
//   return Math.max(accumulator, next);
// }
// function getMin(accumulator, next) {
//   return Math.min(accumulator, next);
// }
// console.log(max);
// console.log(min);

// function expression = a way to define functions as values or variables
// Used for stuff such us Callbacks in asynchronous operations, higher order functions, closures, event listeners, etc.
// const hello = function () {
//   console.log("Hello World!");
// };
// hello();
// setTimeout(function () {
//   console.log("Hello World!");
// }, 3000);

// function declaration
// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(square);
// console.log(squares);
// function square(element) {
//   return Math.pow(element, 2);
// }
// function expression
// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map(function (element) {
//   return Math.pow(element, 2);
// });
// console.log(squares);
// const cubes = numbers.map(function (element) {
//   return Math.pow(element, 3);
// });
// console.log(cubes);

// const evenNums = numbers.filter(function (element) {
//   return element % 2 === 0;
// });
// console.log(evenNums);
// const oddNums = numbers.filter(function (element) {
//   return element % 2 !== 0;
// });
// console.log(oddNums);
// const total = numbers.reduce(function (accumulator, next) {
//   return accumulator + next;
// });
// console.log(total);

// arrow functions => a concise way to write a function expression
//  good for simple functions that you only use once
// (parameter) => code

// const hello = (name, age) => {
//   console.log(`Hello ${name}`);
//   console.log(`You are ${age} years old`);
// };
// hello("Bro", 31);

// setTimeout(function () {
//   console.log("Hello World!");
// }, 2000);
// setTimeout(() => console.log("Hello World!"), 2000);

// const numbers = [1, 2, 3, 4, 5, 6];
// const squares = numbers.map((element) => Math.pow(element, 2));
// const cubes = numbers.map((element) => Math.pow(element, 3));
// const evenNums = numbers.filter((element) => element % 2 === 0);
// const oddNums = numbers.filter((element) => element % 2 !== 0);
// const total = numbers.reduce((accumulator, next) => accumulator + next);
// console.log(squares);
// console.log(cubes);
// console.log(evenNums);
// console.log(oddNums);
// console.log(total);

// Object = a collection of related properties and/or methods
// Can represent real world objects such as users, products, etc.
// object = {key:value, function()}
// const person1 = {
//   firstName: "Spongebob",
//   lastName: "Squarepanths",
//   age: 30,
//   isEmployed: true,
//   sayHello: function () {
//     console.log("Hi! I am Spongebob!");
//   },
//   eat: function () {
//     console.log("I eat crabby patties!");
//   },
// };
// const person2 = {
//   firstName: "Patrick",
//   lastName: "Star",
//   age: 25,
//   isEmployed: false,
//   sayHello: () => console.log("Hey, I'm Patrick..."),
//   eat: () => console.log("I eat pizza!"),
// };
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);
// person1.sayHello();
// person1.eat();
// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployed);
// person2.sayHello();
// person2.eat();

// this = reference to the object where THIS is used
// the object depends on the immediate context
// person.name = this.name;
// this. doesnt work with arrow functions

// const person1 = {
//   name: "Spongebob",
//   favFood: "hamburgers",
//   sayHello: function () {
//     console.log(`Hi! I am ${this.name}`);
//   },
//   eat: function () {
//     console.log(`${this.name} is eating ${this.favFood}!`);
//   },
// };
// person1.sayHello();
// person1.eat();

// const person2 = {
//   name: "Patrick",
//   favFood: "Pizza",
//   sayHello: function () {
//     console.log(`Hi! I am ${this.name}`);
//   },
//   eat: function () {
//     console.log(`${this.name} is eating ${this.favFood}!`);
//   },
// };
// person2.sayHello();
// person2.eat();

// constructor = special method for defining the properties and methods of objects
// function Car(make, model, year, color) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.drive = function () {
//     console.log(`You drive the ${this.model}`);
//   };
// }
// const car1 = new Car("Honda", "Civic", 2019, "Blue");
// const car2 = new Car("Toyota", "Corolla", 2020, "red");
// const car3 = new Car("Dodge", "Ram", 2020, "black");
// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);
// car1.drive();
// car2.drive();
// car3.drive();

// class = (ES6 Feature) Provides a more structured way to work with objects compared to traditional constructor functions
// ex. static keyword, encapsulation, inheritance

// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }
//   displayProduct() {
//     console.log(`Product: ${this.name}`);
//     console.log(`Price: $${this.price.toFixed(2)}`);
//   }
//   calculateTotal(salesTax) {
//     return this.price + this.price * salesTax;
//   }
// }
// const salesTax = 0.05;
// const product1 = new Product("Shirt", 40);
// const product2 = new Product("Pants", 60);
// const product3 = new Product("Pants", 25);
// product1.displayProduct();
// product2.displayProduct();
// product3.displayProduct();
// const total = product3.calculateTotal(salesTax);
// console.log(`Total price (with tax): $${total.toFixed(2)}`);

// static = keyword that defines properties or methods that belong to a class itself rather than the objects created from that class.
// class owns anything static, not the objects.
// class MathUtil {
//   static PI = 3.14159;

//   static getDiameter(radius) {
//     return 2 * radius;
//   }
//   static getCircumference(radius) {
//     return 2 * this.PI * radius;
//   }
//   static getArea(radius) {
//     // return this.PI * Math.pow(radius, 2);
//     return this.PI * radius * radius;
//   }
// }
// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));

// class User {
//   static userCount = 0;

//   constructor(username) {
//     this.username = username;
//     User.userCount++;
//   }
//   static getUserCount() {
//     console.log(`There are ${User.userCount} users online`);
//   }
//   sayHello() {
//     console.log(`Hello, my username is ${this.username}!`);
//   }
// }
// const user1 = new User("Spongebob");
// const user2 = new User("Patrick");
// const user3 = new User("Sandy");
// user1.sayHello();
// user2.sayHello();
// user3.sayHello();
// console.log(user1.username);
// console.log(user2.username);
// console.log(user3.username);
// console.log(User.userCount);
// User.getUserCount();

// inheritance = allows a new class to inherit properties and methods from an existing class (parent -> child)
// helps with code reusability

// class Animal {
//   alive = true;
//   eat() {
//     console.log(`This ${this.name} is eating`);
//   }
//   sleep() {
//     console.log(`This ${this.name} is sleeping`);
//   }
// }
// class Rabbit extends Animal {
//   name = "rabbit";

//   run() {
//     console.log(`This ${this.name} is running`);
//   }
// }
// class Fish extends Animal {
//   name = "fish";

//   swim() {
//     console.log(`This ${this.name} is swimming`);
//   }
// }
// class Hawk extends Animal {
//   name = "hawk";
//   fly() {
//     console.log(`This ${this.name} is flying`);
//   }
// }
// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(hawk.alive);
// hawk.eat();
// hawk.sleep();
// hawk.fly();

// super = keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass)
// this = this object
// super = the parent

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   move(speed) {
//     console.log(`${this.name} moves at a speed of ${speed} kmh`);
//   }
// }
// class Rabbit extends Animal {
//   constructor(name, age, runSpeed) {
//     super(name, age);
//     this.runSpeed = runSpeed;
//   }
//   run() {
//     console.log(`This ${this.name} can run`);
//     super.move(this.runSpeed);
//   }
// }
// class Fish extends Animal {
//   constructor(name, age, swimSpeed) {
//     super(name, age);
//     this.swimSpeed = swimSpeed;
//   }
//   swim() {
//     console.log(`This ${this.name} can swim`);
//     super.move(this.swimSpeed);
//   }
// }
// class Hawk extends Animal {
//   constructor(name, age, flySpeed) {
//     super(name, age);
//     this.flySpeed = flySpeed;
//   }
//   fly() {
//     console.log(`This ${this.name} can fly`);
//     super.move(this.flySpeed);
//   }
// }
// const rabbit = new Rabbit("rabbit", 1, 25);
// const fish = new Fish("fish", 2, 12);
// const hawk = new Hawk("hawk", 3, 50);
// console.log(hawk.name);
// console.log(hawk.age);
// console.log(hawk.flySpeed);
// rabbit.run();
// fish.swim();
// hawk.fly();

// getter = special method that makes a property readable
// setter = special method that makes a property readable
// validate and modify a value when reading/writing a property
// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   set width(newWidth) {
//     if (newWidth > 0) {
//       this._width = newWidth;
//     } else {
//       console.error("Width must be a positive number");
//     }
//   }
//   set height(newHeight) {
//     if (newHeight > 0) {
//       this._height = newHeight;
//     } else {
//       console.error("Height must be a positive number");
//     }
//   }
//   get width() {
//     return `${this._width.toFixed(1)}cm`;
//   }
//   get height() {
//     return `${this._height.toFixed(1)}cm`;
//   }
//   get area() {
//     return `${(this._width * this._height).toFixed(1)}cm^2`;
//   }
// }
// const rectangle = new Rectangle(3, 4);
// rectangle.width = 5;
// rectangle.height = 6;
// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);

// class Person {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   set firstName(newFirstName) {
//     if (typeof newFirstName === "string" && newFirstName.length > 0) {
//       this._firstName = newFirstName;
//     } else {
//       console.error("First name must be a non-empty string");
//     }
//   }
//   set lastName(newLastName) {
//     if (typeof newLastName === "string" && newLastName.length > 0) {
//       this._lastName = newLastName;
//     } else {
//       console.error("Last name must be a non-empty string");
//     }
//   }
//   set age(newAge) {
//     if (typeof newAge === "number" && newAge >= 0) {
//       this._age = newAge;
//     } else {
//       console.error("Age must be a non-negative number");
//     }
//   }
//   get firstName() {
//     return this._firstName;
//   }
//   get lastName() {
//     return this._lastName;
//   }
//   get fullName() {
//     return this._firstName + " " + this._lastName;
//   }
//   get age() {
//     return this._age;
//   }
// }
// const person = new Person("Spongebob", "Squarepants", 30);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName);
// console.log(person.age);

// destructuring = extract values from arrays and objects, then assign them to variables in a convenient way
// [] = for array destructuring
// {} = for object destructuring

// Example 1
// swap value of two variables
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// Example 2
// swap 2 elements in an array
// const colors = ["red", "green", "blue", "yellow", "black"];
// console.log(colors);
// [colors[0], colors[4]] = [colors[4], colors[0]];
// console.log(colors);
// Example 3
// assign array elements to variables
// const colors = ["red", "green", "blue", "yellow", "black"];
// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);
// Example 4
// Extract values from objects
// const person1 = {
//   firstName: "Spongebob",
//   lastName: "Squarepants",
//   age: 30,
//   job: "Cook",
// };
// const person2 = {
//   firstName: "Patrick",
//   lastName: "Star",
//   age: 34,
// };
// const { firstName, lastName, age, job = "Unemployed" } = person2;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);
// Example 5
// Destructure in function parameters
// function displayPerson({ firstName, lastName, age, job = "Unemployed" }) {
//   console.log(`name: ${firstName} ${lastName}	`);
//   console.log(`age: ${age}  `);
//   console.log(`job: ${job}  `);
// }
// const person1 = {
//   firstName: "Spongebob",
//   lastName: "Squarepants",
//   age: 30,
//   job: "Cook",
// };
// const person2 = {
//   firstName: "Patrick",
//   lastName: "Star",
//   age: 34,
// };
// displayPerson(person1);

// nest objects = Objects inside of other Objects.
// Allows you to represent more complex data structures
// Child Object is enclosed by a Parent Object
// Person{Address{}},ContactInfo{}}
// ShoppingCart{Keyboard{},Mouse{},Monitor{}}
// const person = {
//   fullName: "Spongebob Squarepants",
//   age: 30,
//   isStudent: true,
//   hobbies: ["karate", "jellyfishing", "cooking"],
//   address: {
//     street: "124 Conch St.",
//     city: "Bikini Bottom",
//     country: "Int.Water",
//   },
// };
// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[2]);
// console.log(person.address.city);
// for (const property in person.address) {
//   console.log(person.address[property]);
// }

// class Person {
//   constructor(name, age, ...address) {
//     this.name = name;
//     this.age = age;
//     this.address = new Address(...address);
//   }
// }

// class Address {
//   constructor(street, city, country) {
//     this.street = street;
//     this.city = city;
//     this.country = country;
//   }
// }
// const person1 = new Person(
//   "Spongebob",
//   30,
//   "124 Conch St.",
//   "Bikini Bottom",
//   "Int. Waters"
// );
// const person2 = new Person(
//   "Patrick",
//   34,
//   "128 Conch St.",
//   "Bikini Bottom",
//   "Int. Waters"
// );
// const person3 = new Person(
//   "Squidward",
//   39,
//   "126 Conch St.",
//   "Bikini Bottom",
//   "Int. Waters"
// );
// console.log(person3.address.street);

// Working with arrays of objects

// const fruits = [ // reuse for all examples
//   { name: "apple", color: "red", calories: 95 },
//   { name: "orange", color: "orange", calories: 45 },
//   { name: "banana", color: "yellow", calories: 110 },
//   { name: "coconut", color: "white", calories: 157 },
//   { name: "pineapple", color: "yellow", calories: 37 },
// ];
// console.log(fruits[1].calories);
// fruits.push({ name: "grapes", color: "purple", calories: 62 });
// fruits.pop();
// fruits.splice(1, 2);
// fruits.forEach((fruit) => console.log(fruit.name));
// const fruitNames = fruits.map((fruit) => fruit.name);
// const fruitColors = fruits.map((fruit) => fruit.color);
// const fruitCalories = fruits.map((fruit) => fruit.calories);
// console.log(fruitNames);
// console.log(fruitColors);
// console.log(fruitCalories);
// const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
// const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
// const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);
// console.log(yellowFruits);
// console.log(lowCalFruits);
// console.log(highCalFruits);
// const maxFruit = fruits.reduce((max, fruit) =>
//   fruit.calories > max.calories ? fruit : max
// );
// const minFruit = fruits.reduce((min, fruit) =>
//   fruit.calories < min.calories ? fruit : min
// );
// console.log(maxFruit);
// console.log(minFruit);

// sort() = method used to sort elements of an array in place.
// Sorts elements as strings in lexicographic order, not alphabetical
// Lexicographic = (alphabet + numbers + symbols) as strings
// let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
// fruits.sort();
// console.log(fruits);
// let numbers = [10, 8, 3, 6, 5, 7, 4, 2, 9, 1];
// numbers.sort((a, b) => a - b);
// numbers.sort((a, b) => b - a); //reverse order
// console.log(numbers);

// const people = [
//   { name: "Spongebob", age: 30, gpa: 3.0 },
//   { name: "Patrick", age: 28, gpa: 1.5 },
//   { name: "Squidward", age: 45, gpa: 2.5 },
//   { name: "Sandy", age: 24, gpa: 4.0 },
// ];
// // people.sort((a, b) => a.name - b.name);
// // people.sort((a, b) => b.age - a.age); //reverse order
// people.sort((a, b) => a.name.localeCompare(b.name)); //for strings
// console.log(people);

// Shuffling the elements of an array
// const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
// cards.sort(() => Math.random() - 0.5); //one way to shuffle, not the recommended way
// shuffle(cards);
// console.log(cards);
// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const random = Math.floor(Math.random() * (i + 1));
//     [array[i], array[random]] = [array[random], array[i]];
//   }
// }
// Date objects = Objects that contain values that represent dates and times.
// These date objects can be changed and formatted
// Date constructor = year,month,day,hour,minute,second,millisecond
// const date = new Date(0);
// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth() + 1;
// const day = date.getDate();
// const hour = date.getHours();
// const minute = date.getMinutes();
// const second = date.getSeconds();
// const millisecond = date.getMilliseconds();
// const dayOfWeek = date.getDay();
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minute);
// console.log(second);
// console.log(millisecond);
// console.log(dayOfWeek);

// const date = new Date();
// date.setFullYear(2030);
// date.setMonth(1);
// date.setDate(2);
// date.setHours(3);
// date.setMinutes(4);
// console.log(date);

// const date1 = new Date("2023-12-31");
// const date2 = new Date("2024-01-01");
// if (date2 > date1) {
//   console.log("Happy new year");
// }

// closure = A function defined inside of another function, the inner function has access to the variables and scope of the outer function.
// Allow for private variables and state maintenance.
// Used frequently in Js Frameworks : React, Vue, Angular
// function outer() {
//   let message = "Hello";
//   function inner() {
//     console.log(message);
//   }
//   inner();
// }
// message = "Goodbye"; //won't work
// outer();

// function createCounter() {
//   let count = 0;
//   function increment() {
//     count++;
//     console.log(`Count increased to ${count}`);
//   }
//   function getCount() {
//     return count;
//   }
//   return { increment, getCount };
// }
// const counter = createCounter();
// counter.increment();
// counter.increment();
// console.log(`The current count is ${counter.getCount()}`);

// function createGame() {
//   let score = 0;
//   function increaseScore(points) {
//     score += points;
//     console.log(`+${points} points`);
//   }
//   function decreaseScore(points) {
//     score -= points;
//     console.log(`-${points} points`);
//   }
//   function getScore() {
//     return score;
//   }
//   return { increaseScore, decreaseScore, getScore };
// }
// const game = createGame();
// game.increaseScore(5);
// game.decreaseScore(10);
// console.log(`The final score is ${game.getScore()}points`);

// setTimeout() = function in JavaScript that allows you to schedule the execution of a function after an amount of time (in milliseconds)
// Times are approximate (varies based on the workload of the Javascript runtime environment).
// setTimeout(callback,delay);
// function sayHello() {
//   window.alert("Hello");
// }
// setTimeout(sayHello, 3000);
// setTimeout(function () {
//   window.alert("Hello");
// }, 3000);
// setTimeout(() => window.alert("Hello"), 3000);

// clearTimeout(TimeoutID) = can cancel a timeout before it triggers
// const timeoutId = setTimeout(() => window.alert("Hello"), 3000);
// clearTimeout(timeoutId);

// let timeoutId;
// function startTimer() {
//   timeoutId = setTimeout(() => window.alert("Hello"), 3000);
//   console.log("Started timer");
// }
// function clearTimer() {
//   clearTimeout(timeoutId);
//   console.log("Cleared timer");
// }

// ES6 Module = An external file that contains reusable coide that can be imported into other JavaScript files.
// Write reusable code for many different apps.
// Can contain variables, classes, functions ... and more.
// Introduced as part of ECMAScript 2015 update
// import { PI, getCircumference, getArea, getVolume } from "./mathUtil.js";
// console.log(PI);
// const circumference = getCircumference(10);
// const area = getArea(10);
// const volume = getVolume(10);
// console.log(`${circumference.toFixed(2)} cm`);
// console.log(`${area.toFixed(2)} cm^2`);
// console.log(`${volume.toFixed(2)} cm^3`);

// synchronous = Executes line by line consecutively in a sequential manner.
// Code that waits for an operation to complete
// asynchronous = Allows multiple operations ot be performed concurrently without waiting.
// Doesnt block the execution flow and allows the program to continue
// (I/O operations, network requests, fetching data)
// Handled with: Callbacks, Promises, Async/Await

// Synchronous example
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");

// Asynchronous example
// function funct1(callback) {
//   setTimeout(() => {
//     console.log("Task 1");
//     callback();
//   }, 3000);
// }
// function funct2() {
//   console.log("Task 2");
//   console.log("Task 3");
//   console.log("Task 4");
// }
// funct1(funct2);

// Error = An object that is created to represent a problem that occurs
// Occur often with user input or enstablishing a connection
// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up. ex. close files, close connections, release resources
// try {
//   console.log(x);
//   // NETWORK ERRORS
//   // PROMISE REJECTION
//   // SECURITY ERRORS
// } catch (error) {
//   console.error(error);
// } finally {
//   // CLOSE FILES
//   // CLOSE CONNECTIONS
//   // RELEASE RESOURCES
//   console.log("This always executes");
// }
// console.log("Goodbye");

// try {
//   const dividend = Number(window.prompt("Enter a dividend: "));
//   const divisor = Number(window.prompt("Enter a divisor: "));

//   if (divisor == 0) {
//     throw new Error("You can't divise by zero");
//   }
//   if (isNaN(dividend) || isNaN(divisor)) {
//     throw new Error("Values must be a number");
//   }
//   const result = dividend / divisor;
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }
// console.log("Goodbye");

// DOME = DOCUMENT OBJECT MODEL
// Object{} that represents the page you see in the web browser and provides you with an API to interact with it.
// Web browser constructs the DOM when it loads an HTML document and structures all the elements in a tree-like representation
// Javascript can access the DOM to dynamically change the content, structure and style of a web page.
// const username = " John";
// const welcomeMsg = document.getElementById("welcome-msg");
// welcomeMsg.textContent += username === "" ? `Guest` : username;

// element selectors = Methods used to target and manipulate HTML elements
// They allow you to select one or multiple HTML elements from the DOM

// 1) document.getElementById()       // ELEMENTS OR NULL
// 2) document.getElementsByClassName()// HTML COLLECTION
// 3) document.getElementByTagName()  // HTML COLLECTION
// 4) document.querySelector()        // ELEMENTS OR NULL
// 5) document.querySelectorAll()     // NODELIST

// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";
// console.log(myHeading);

// const fruits = document.getElementsByClassName("fruits");
// fruits[1].style.backgroundColor = "yellow";
// for (let fruit of fruits) {
//   fruit.style.backgroundColor = "yellow";
// }
// fruits.forEach(); //HTML COLLECTIONS dont have a forEach() method
// Array.from(fruits).forEach((fruit) => {
//   fruit.style.backgroundColor = "yellow";
// });

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

// h4Elements[1].style.backgroundColor = "yellow";
// for (let h4Element of h4Elements) {
//   h4Element.style.backgroundColor = "yellow";
// }
// for (let liElement of liElements) {
//   liElement.style.backgroundColor = "green";
// }

// Array.from(h4Elements).forEach((h4Element) => {
//   h4Element.style.backgroundColor = "yellow";
// });
// Array.from(liElements).forEach((liElement) => {
//   liElement.style.backgroundColor = "green";
// });

// const element = document.querySelector("ul");
// element.style.backgroundColor = "yellow";

// const foods = document.querySelectorAll("li");
// foods[0].style.backgroundColor = "yellow";
// console.log(foods); // querySelectorAll returns a nodelist

// foods.forEach((food) => {
//   food.style.backgroundColor = "yellow";
// });

// DOM Navigation = The process if nagivating through the structure of an HTML document using JavaScript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// ------- .firstElementChild -------
// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach((ulElement) => {
//   const firstChild = ulElement.firstElementChild;
//   firstChild.style.backgroundColor = "yellow";
// });

// ------- .lastElementChild -------
// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach((ulElement) => {
//   const lastChild = ulElement.lastElementChild;
//   lastChild.style.backgroundColor = "yellow";
// });

// ------- .nextElementSibling -------
// const element = document.getElementById("apple");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";

// ------- .previousElementSibling -------
// const element = document.getElementById("pie");
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor = "yellow";

// ------- .parentElement -------
// const element = document.getElementById("apple");
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";

// ------- .children -------
// const element = document.getElementById("fruits");
// const children = element.children; //returns an HTML collection
// // Array.from(children).forEach((child) => {
// //   child.style.backgroundColor = "yellow";
// // });
// children[1].style.backgroundColor = "yellow";

// How to add and change HTML elements using JavaScript
// STEP 1 - Create the element
// const newH1 = document.createElement("h1");
// // STEP 2 - Add attributes/properties
// newH1.textContent = "I like pizza";
// newH1.id = "myH1";
// newH1.style.color = "red";
// newH1.style.textAlign = "center";

// STEP 3 - Append element to DOM
// document.body.append(newListItem);
// document.body.prepend(newListItem);
// document.getElementById("apple").appendChild(newListItem); // makes it the last child
// document.getElementById("apple").prepend(newListItem); // makes it the first child
// document.body.append(newH1);
// document.getElementById("box1").appendChild(newH1);
// document.getElementById("box1").prepend(newH1);
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[1]);

// Remove HTML element
// document.body.removeChild(newH1);

// example
// const newListItem = document.createElement("li");
// newListItem.textContent = "coconut";
// newListItem.id = "coconut";
// newListItem.style.fontWeight = "bold";
// newListItem.backgroundColor = "green";
// document.getElementById("fruits").append(newListItem);
// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);

// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[1]);

// eventListener = Listen for a specific event to create interactive web pages.
// events: click, mouseover, mouseout
// .addEventListener(event, callbacks, functions, arrows functions )
// const myBox = document.getElementById("myBox");
// const myButton = document.getElementById("myButton");

// myBox.style.backgroundColor = "lightblue";
// myButton.addEventListener("click", (event) => {
//   myBox.style.backgroundColor = "purple";
//   myBox.textContent = "Ouch! 😭";
// });
// myButton.addEventListener("mouseover", (event) => {
//   myBox.style.backgroundColor = "yellow";
//   myBox.textContent = "Don't do it! 😱";
// });
// myButton.addEventListener("mouseout", (event) => {
//   myBox.style.backgroundColor = "lightblue";
//   myBox.textContent = "Click me again 😎";
// });

// Key events
// eventListener = Listen for specific events to create interactive web pages
// events like keydown, keyup etc
//(keypress = do not use, its incompatible with most web browsers)
// document.addEventListener(event, callbacks);

// const myBox = document.getElementById("myBox");
// const moveAmount = 25;
// let x = 0;
// let y = 0;
// document.addEventListener("keydown", (event) => {
//   myBox.textContent = "😁";
//   myBox.style.backgroundColor = "orange";
// });
// document.addEventListener("keyup", (event) => {
//   myBox.textContent = "😊";
//   myBox.style.backgroundColor = "lightblue";
// });
// document.addEventListener("keydown", (event) => {
//   event.preventDefault();

//   if (event.key.startsWith("Arrow")) {
//     switch (event.key) {
//       case "ArrowUp":
//         y -= moveAmount;
//         break;
//       case "ArrowDown":
//         y += moveAmount;
//         break;
//       case "ArrowLeft":
//         x -= moveAmount;
//         break;
//       case "ArrowRight":
//         x += moveAmount;
//         break;
//     }
//     myBox.style.top = `${y}px`;
//     myBox.style.left = `${x}px`;
//   }
// });

// Showing and Hiding HTML elements using Javascript
const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", (event) => {
  if (myImg.style.visibility === "hidden") {
    myImg.style.visibility = "visible";
    myButton.textContent = "Hide";
  } else {
    myImg.style.visibility = "hidden";
    myButton.textContent = "Show";
  }
});
