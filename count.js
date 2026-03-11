let array=[1,2,2,3,3,3]
let count={}
function x(){
    for (let i = 0; i < array.length; i++) {
        if(count[array[i]]){
            count[array[i]]++
        }else{
            count[array[i]]=1
        }
        
    }
    return count;

}
console.log(x())


let obj={}
let array1=["a","1","b","2","c","3","d","5"]
function other(){
for (let i = 0; i < array1.length; i+=2) {
   
obj[array1[i]] = array1[i+1]
    
    
}
return obj;
}
console.log(other())

// const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const count = {};

// arr.forEach(item => {
//   count[item] = (count[item] || 0) + 1;
// });

// console.log(count);

// const count = {};

// for (let char of str) {
//   count[char] = (count[char] || 0) + 1;
// }

// console.log(count);

// const count1 = array.reduce((acc,item)=>{
//     acc[item] = (acc[item] || 0) +1
//     return acc;
// },{})

// const str = 'HELLO';
// const arr = Array.from(str);
// console.log(arr);