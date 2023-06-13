const arr =[1,2,3,4,5,6,7,8,9,10];

const changedNumber = arr.map( number=> number%2 ===0? number-1:number+1);
console.log(changedNumber);