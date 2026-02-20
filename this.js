
"use strict"
/** this in global space */
console.log(this); // In a browser, this will log the global window object. In Node.js, it will log an empty object ({}).

/** this in a function */  
function myFunction() {
    console.log(this); // In a non-strict mode, this will log the global object (window in browsers). In strict mode, it will be undefined.
}   

myFunction();

const obj={
    a:10,
    x:function(){
        console.log(this)
        // print {a:10,x:f()}
    }
}
obj.x();

const obj1={
    a:10,
    x:function(){
        console.log(this.a)
        // print a:10
    }
}
obj1.x();

const obj2={
    a:10,
    x:()=>{
        console.log(this)
        // window()
    }
}
obj2.x();

const obj3={
    a:10,
    x:function(){
        const y=()=>{
console.log(this) //enclosing lexical context
        }
        
        y()
    }
}
obj3.x();//{ a: 10, x: [Function: x] }
{/* <button (onclick)=alert(this)></button> */}
// its give object element button

const z=[]
z[4]=1;
z.forEach(i=>{
    console.log('hi')
}) ///0-3 z value not define thats why print only 4th element hi