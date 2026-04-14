let unique=[];
let array=[1,2,34,5,2,1]
function x()
{
    for (let i = 0; i < array.length; i++) {
   let found=false;
    for (let j = 0; j < unique.length; j++) {
        if(array[i] === unique[j]){
            found=true;
            break;
        }
    }
    if(found === false){
    unique.push(array[i])  
}

}
return unique;
}
console.log(x())


let arr=[1,2,2,3,4]
 unique=arr.filter((item,i)=>arr.indexOf(item)===i)
// let result = arr.reduce((acc,val)=>{
//     if(!acc.includes(val)){
//         acc.push(val)
//     }
//     return acc
// },[])