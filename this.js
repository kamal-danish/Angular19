/** this in global space */
console.log(this); // In a browser, this will log the global window object. In Node.js, it will log an empty object ({}).

/** this in a function */  
function myFunction() {
    console.log(this); // In a non-strict mode, this will log the global object (window in browsers). In strict mode, it will be undefined.
}   
