function fibonacci(n){
    let a=0;let b=1;
    for (let index = 0; index < n; index++) {
        console.log(a)
        let next = a+b;
        a=b;
        b=next
        
    }
}
fibonacci(7)