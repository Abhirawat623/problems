const obj ={
    name:"Abhishek",
    city:"Delhi"
}
const check ="age" in obj;
// console.log(check);

for (let key in obj){
console.log(key,
    obj[key]);
}