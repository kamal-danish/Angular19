let str="programming";
let dup=[];
function x(){
for (let i = 0; i < str.length; i++) {
   for (let j = i+1; j < str.length; j++) {
   if(str[i] === str[j]){
    dup.push(str[i]);
    break;
    
   }
}
}
return dup;
}
console.log(x())