const person1={
    name:"Abhishek",
    age:100, 
    adress:{
        city:"Delhi",
        state:"NCR"
    }
}
// console.log(person1);
// const person2=person1;
// person2.name="Tarun";
// person2.age="122";
// console.log(person2);
console.log(person1);
const person2 = Object.assign({},person1);
// console.log(person2);
person2.name="Rizwan";
person2.age="1011";
person2.adress.city ="Sumit";
console.log(person2)