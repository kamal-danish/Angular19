let max=0;
let secondMax=0;
let array=[1,2,34,5]
function x(){
    for (let num of array) {
if(num>max){
    secondMax=max;
    max=num;
}else if(num>secondMax && num!=max){
    secondMax=num;      
    }
}
return secondMax;
}
console.log(x())