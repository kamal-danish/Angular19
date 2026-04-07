// let str = "aabbcd";

// for(let i=0;i<str.length;i++){
//   let count = 0;

//   for(let j=0;j<str.length;j++){
//     if(str[i] === str[j]) count++;
//   }

//   if(count === 1){
//     console.log(str[i]);
//     break;
//   }
// }




let array=[1,2,3,4,2,3,5,6]
for(let num of array){
  if(array.indexOf(num) === array.lastIndexOf(num)){
    console.log(num)
  }
}

let str = 'aabbccd';

let map = new Map();

[...str].forEach(c => map.set(c, (map.get(c) || 0) + 1));

let result = [...map.entries()].find(([k, v]) => v === 1)?.[0];

console.log(result); // d


