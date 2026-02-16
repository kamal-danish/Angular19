let array=[1,2,34,5,2,1]
let duplicate=[];
function x(){
    for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
        if(array[i] === array[j]){
            duplicate.push(array[i])
        }
        
    }
    }
    return duplicate;
}
console.log(x())