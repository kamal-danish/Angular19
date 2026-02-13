function greet(name) {
  return "Hello " + name;
}

function sayHello(fn) {
  console.log(fn("Alex"));
}

sayHello(greet);

//Takes another function as an argument

//Returns a function as its result

//sayHello takes a function (greet) as an argument
//so sayHello is a higher-order function.


function multiplier(x) {
  return function(y) {
    return x * y;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
// multiplier returns another function
// 👉 higher-order function again.