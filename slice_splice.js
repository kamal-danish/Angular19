// array.slice(start, end)
// start → starting index (included)

// end → ending index (excluded)

let arr = ["I", "go", "home"];

// returns the new array with elements from index 0 to 2 (not including 2)
console.log(arr.slice(0, 2)); // I, go

// slice() returns a shallow copy of a portion of an array. The original array will not be modified.

// if we want to get the last 2 elements, we can use negative indexes
console.log(arr.slice(-2)); // go, home


// splice() is used to add, remove, or replace elements in an array.


// let arr = [10, 20, 30];

// arr.splice(1, 0, 15);

// console.log(arr); // [10, 15, 20, 30]

// array.splice(start, deleteCount, item1, item2, ...)
// start → index to start changing

// deleteCount → how many elements to remove

// item1, item2... → elements to add (optional)