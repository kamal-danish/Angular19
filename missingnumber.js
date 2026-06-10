let arr = [1, 3, 4, 5, 6];

let n = arr.length + 1; // expected total numbers (1 to 6)
let totalSum = (n * (n + 1)) / 2;

let arraySum = arr.reduce((sum, num) => sum + num, 0);

let missing = totalSum - arraySum;

console.log("Missing number is:", missing);