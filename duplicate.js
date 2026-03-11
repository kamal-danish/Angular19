let array=[1,2,34,5,2,1]
let duplicate=[];
function x(){
    for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
        if(array[i] === array[j]){
            duplicate.push(array[i])
        }
        
    }
    }
    return duplicate;
}
console.log(x())



let arr1 = [
 {id:1, name:'Danish'},
 {id:2, name:'Amit'},
 {id:3, name:'Ravi'}
];

let arr2 = [
 {id:2, name:'Amit'},
 {id:3, name:'Ravi'},
 {id:4, name:'Rahul'}
];

let duplicates = arr1.filter(a1 =>
  arr2.some(a2 => a2.id === a1.id)
);

console.log(duplicates);


// let arr1 = [1,2,3,4,5];
// let arr2 = [3,4,5,6,7];

// let duplicates = arr1.filter(item => arr2.includes(item));

// console.log(duplicates);


// let map = new Map(arr2.map(item => [item.id, item]));

// let result = arr1.filter(item => map.has(item.id));

// console.log(result);