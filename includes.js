// const string =["s", "l", "m", "j", "p", "t"];
// const read =require("readline-sync");
// const size =read.question("whats ur size? (s,l,m,j,p,t)");
// const output = string.includes(size);
// console.log(output);

const availNotes=["1000","500","200","100","50","10","20"];
const input = require("readline-sync");
const check = input.question("What type of notes do you want");
const out = availNotes.includes(check);
if(out){

console.log("yes you can take ");}

else{
console.log("no you cant take");}
