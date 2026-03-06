let array = [1,2,[3,4],[5,[6,7]]];
let result=[]
for (let i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])){
        for (let j = 0; j < array.length; j++) {
           if(Array.isArray(array[i][j])){
            result = result.concat(array[i][j]);
           }else{
            result.push(array[i][j]);
           }
            
        }
    }else{
        result.push(array[i][j]);
    }
    
}
console.log(array)