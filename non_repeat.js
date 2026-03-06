let str = "aabbcd";

for(let i=0;i<str.length;i++){
  let count = 0;

  for(let j=0;j<str.length;j++){
    if(str[i] === str[j]) count++;
  }

  if(count === 1){
    console.log(str[i]);
    break;
  }
}

let array=[1,2,3,4,2,3,5,6]
for(let num of array){
  if(array.indexOf(num) === array.lastIndexOf(num)){
    console.log(num)
  }
}