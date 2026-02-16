let str="hello";
let rev='';
function x(){
for (let index = str.length-1; index >=0; index-- ){
    rev+=str[index]
    
}
return rev;;
}
console.log(x())