
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