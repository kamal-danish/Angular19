let arr = [1,2,3,4,5];

function x(){
for(let i=arr.length-1;i>0;i--){
  let j = Math.floor(Math.random()*(i+1));

  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
return arr;
}
console.log(x())

