
function flatten(arr,result=[]){
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])){
            flatten(arr[i],result)
        }else{
            result.push(arr[i])
        }
        
    }
    return result
}
let array = [1,2,[3,4],[5,[6,7]]];

console.log(flatten(array));



// let array=[1,2,3,4,5,[15],[[[8,91,10]]]];
// let result=[]
// function flattern(array){
// for(let item of array){
//     if(Array.isArray(item)){
//         flattern(item)
//     }else{
//         result.push(item)
//     }
// }2
// return result
// }