

const read =require("readline-sync");
const input =read.question("type");
const coarse = read.question("tytpe the coarse");

const obj ={
    name:"Abhishek",
    age:24,
    [coarse]:"courses not available"
}
 
obj.city="delhi";
obj.state ="NCR"
// console.log(obj);
console.log(obj[coarse]);
console.log(obj["name"]);