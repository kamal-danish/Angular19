function leapyear(year){
    if((year % 4=== 0 && year % 100 !== 0) || (year % 400 === 0)){
return true
    }else{
        return false
    }
}
console.log(leapyear(2023))
console.log(leapyear(2024))
