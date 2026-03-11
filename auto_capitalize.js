const str="India is my country"
const result = str.split(" ").map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ") 
console.log(result)

