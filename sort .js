// const fruits=["apple" ,"don","zebra","orange","ball","dog"];
// fruits.sort();
// console.log(fruits)

const numbers=[ 1, 2, 5,4154,45,5487,163,44,7,9, 87];
function numberToAscending(x,y){
    return x-y;
}
numbers.sort(numberToAscending);
console.log(numbers)

function numberToscending(x,y){
  return y-x;
}
numbers.sort(numberToscending)
console.log(numbers);