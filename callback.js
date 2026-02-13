// What is a callback function?

// A callback function is a function that is passed as an argument to another function and is called later (back).

// So:

// You don’t call it yourself

// Another function calls it for you

function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  callback("Alex");
}

processUser(greet);

// greet is the callback function

// processUser is the higher-order function

setTimeout(function () {
  console.log("This runs after 2 seconds");
}, 2000);


// Question:-Why do we use callback functions?
// Answer=>To handle asynchronous operations,To make code reusable


// Ques:-How do you avoid callback hell?

// Answer:

// Use Promises

// Use async / await

// Break code into smaller functions