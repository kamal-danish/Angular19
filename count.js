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