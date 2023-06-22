// const arr =[11,14,35,48,87,45,87,90];
// const res = arr.reduce( (acc,cur) => cur <40 ? acc+ cur: acc,0);
// console.log(res);

const arr =[1,2,4,5,6,9,10,15,21,25,24,29,30,34,39,41];
const sumTill40 = arr.reduce((acc,cur)=> cur <40? acc+cur: acc,0);
console.log(sumTill40)