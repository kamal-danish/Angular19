
/**Closure = function that remembers variables from where it was created */
/**A function along with the lexical scope*/
function x(){
    var a=7;
    function y(){
        console.log(a)
    }
    y()
}
x()


function x(){
    var a=7;
    function y(){
        console.log(a)
    }
  return y;
}
var z = x()
console.log(z) /**return function y(){ console.log(a)} */
z();/**but when we run this its called y() and then a value retur from their lexical scope 7*/

/**Closure yahan kaise bana?

y() return hone ke baad bhi

a ko access kar raha hai

Isliye JS engine a ko memory me preserve karta hai */

function x(){
    var a=7;
    function y(){
        console.log(a)
    }
    a=100;
  return y;
}
var z = x()
console.log(z) /**return function y(){ console.log(a)} */
z();
//100


function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const fn = outer(); // fn now has a closure
fn(); // 1
fn(); // 2


function createCounter() {
  let count = 0;
  return {
    increment() { count++; console.log(count); },
    decrement() { count--; console.log(count); }
  };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1

for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000); // var is function scope and preserve memory reference of i 
} //4,4,4

for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000); //let is blocked scope and create new copy every time
} //1,2,3


function x(){
    var i=1
    setTimeout(function () {  /**function () {console.log(i)}   this is clouser   ------ setTimeout take callback function attached timer and print*/ 
        console.log(i)
    }, 1000);
    console.log('hello')
}

x()


function x(){
for (var i = 1; i <= 3; i++) {
 function close(x){
  setTimeout(() => console.log(i), x*1000); // function parameter create new scope here that;s why giving 1,2,3 

 }    
 close(i)
}

}
x()




