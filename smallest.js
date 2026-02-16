let array=[1,2,34,5]
let smallest=array[0];
function x(){
    for (let index = 0; index < array.length; index++) {
        if (smallest > array[index]) {
            smallest = array[index]
        }   
        return smallest;
    }
}
    console.log(x())