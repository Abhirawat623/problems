const arr =[98,21,32,9];

const newArr = arr.reduce((acc,cur)=>cur>acc?acc:cur,0);
console.log(newArr)

// const newArrr = arr.reduce((acc,cur)=> acc<cur? cur-acc:acc);
// console.log(newArrr)