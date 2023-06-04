jabsbrksns 
shsnen
hshshs
hshshshs
bsbshshs
// const user= true;


// if (user){
//     console.log("hello,how are you");
// }

// const loggedIn =false;
// if (loggedIn){
// console.log("you are logged in")}
  

// if (userAge >18 ){
//     console.log("you are adult");
// }
// else{
//     console.log("you are not adult");  
// }

// const rem = num%3;
// const rem_2 =num%5;
// if(rem ===0){
//     console.log("divisible  by 3");
// }
// if(rem_2 ===0){
//     console.log("not divisble by 5");
// }

const readLineSync = require("readline-sync");
const num = readLineSync.question("enter your Number");

const rem = num % 3;
const remA = num %5;
if (rem === 0 && remA ===0){
    console.log("fizz");
}
else if (rem ===0 || remA ===0){
    console.log("buzz");
}
else if(rem===0) {
    console.log("buzbuz");
    
}