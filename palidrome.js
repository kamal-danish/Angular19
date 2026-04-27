// function isPalidrome(str){
//     const cleaned = str.toLowerCase();
//     const reverse = str.split('').reverse().join('');
//     return reverse === cleaned
// }
//  console.log(isPalidrome('madam'))
//  console.log(isPalidrome('hello'))


//  --------------------------------------------------------------------------------------------

const isPalidrome = str=>str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
console.log(isPalidrome("racecar")); 

