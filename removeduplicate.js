let array=[1,2,34,1,7,92]
let result=[]
function removeDup(){
    for (let index = 0; index < array.length; index++) {
        if(!result.includes(array[index])){
            result.push(array[index])
        }
        
    }
    return result;
}
console.log(removeDup())