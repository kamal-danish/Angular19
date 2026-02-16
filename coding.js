// ⭐ 1️⃣ Reverse Array
// const arr = [1,2,3,4];
// const rev = [...arr].reverse();

// ⭐ 2️⃣ Largest Number in Array
// const max = Math.max(...arr);

// ⭐ 3️⃣ Smallest Number
// const min = Math.min(...arr);

// ⭐ 4️⃣ Find Duplicate Elements
// const arr = [1,2,2,3,4,4];

// const dup = arr.filter((v,i,a) => a.indexOf(v) !== i);
// const result = [...new Set(dup)];

// ⭐ 5️⃣ Unique Elements
// const unique = [...new Set(arr)];

// ⭐ 6️⃣ Count Occurrence
// const arr = ['a','b','a','c','b','a'];

// const count = arr.reduce((acc,val)=>{
//   acc[val] = (acc[val] || 0) + 1;
//   return acc;
// },{});

// ⭐ 7️⃣ Merge Arrays
// const merged = [...a, ...b];

// ⭐ 8️⃣ Flatten Nested Array
// const flat = arr.flat(Infinity);

// ⭐ 9️⃣ Sort Asc / Desc
// arr.sort((a,b)=>a-b); // Asc
// arr.sort((a,b)=>b-a); // Desc

// ⭐ 🔟 Second Largest Number
// const second = [...new Set(arr)].sort((a,b)=>b-a)[1];

// ⭐ 1️⃣1️⃣ Reverse String
// const rev = str.split('').reverse().join('');

// ⭐ 1️⃣2️⃣ Palindrome Check
// const isPal = str === str.split('').reverse().join('');

// ⭐ 1️⃣3️⃣ Count Vowels
// const count = str.match(/[aeiou]/gi)?.length || 0;

// ⭐ 1️⃣4️⃣ Duplicate Characters in String
// const dup = str.split('').filter((c,i,a)=>a.indexOf(c)!==i);

// ⭐ 1️⃣5️⃣ First Non-Repeating Character
// const first = str.split('').find(c => 
//   str.indexOf(c) === str.lastIndexOf(c)
// );

// ⭐ 1️⃣6️⃣ Currying Function
// const add = a => b => c => a + b + c;

// ⭐ 1️⃣7️⃣ Debounce Function
// function debounce(fn, delay){
//   let timer;
//   return function(...args){
//     clearTimeout(timer);
//     timer = setTimeout(()=>fn.apply(this,args), delay);
//   }
// }

// ⭐ 1️⃣8️⃣ Throttle Function
// function throttle(fn, limit){
//   let flag = true;
//   return function(...args){
//     if(flag){
//       fn.apply(this,args);
//       flag = false;
//       setTimeout(()=> flag = true, limit);
//     }
//   }
// }

// ⭐ 1️⃣9️⃣ Basic Promise Example
// const p = new Promise((res, rej)=>{
//   setTimeout(()=> res("Done"), 1000);
// });

// ⭐ 2️⃣0️⃣ Deep Clone Object
// const clone = structuredClone(obj);


// OR

// const clone = JSON.parse(JSON.stringify(obj));

// ⭐ ⭐ BONUS — Shuffle Array Randomly (Very Important)
// ✅ Fisher-Yates Shuffle (Best Way)
// function shuffle(arr){
//   for(let i = arr.length-1; i > 0; i--){
//     let j = Math.floor(Math.random()*(i+1));
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
//   return arr;
// }