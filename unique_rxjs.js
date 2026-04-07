const { distinct,from,distinctUntilChanged } = require("rxjs")

 let array=[{id:1,name:'Danish'},{id:2,name:'Amit'},{id:1,name:'Ranjeet'}]
from(array).pipe(distinct(item=>item.id)).subscribe(console.log);

const unique = [...new Map(array.map(i=>[i.id,i])).values()]
console.log(unique)


from([1,1,2,2,3,4,4,5,6,1,78]).pipe(
  distinctUntilChanged()).subscribe(console.log)
