let array = [1, 2, 34, 5]
let rev = [];
function x() {
    for (let index = array.length - 1; index >= 0; index--) {
        rev.push(array[index])
    }
    return rev;
}
console.log(x())