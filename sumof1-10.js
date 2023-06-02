factorial(min,max){
    let total = 0;
    for ( i=min; i<=max; i++){
        total=total+i;
    }
   return total;

}

const out = calculateSum(1,100);
console.log(out)