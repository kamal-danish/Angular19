let array=[1,2,34,5];
let largest=array[0];
function x(){
    for (let index = 0; index < array.length; index++) {
        if (largest < array[index]) {
            largest = array[index]
        }
    }
    return largest;
}
console.log(x())