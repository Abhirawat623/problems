const { FourMp } = require("@mui/icons-material");

const user ={
 name:"Abhishek",
 age:102,
 address :{
    street:"devli road",
 city:"Mumbai"
 },
 likes :"Eat sing hyere",
 getDisplaymessage : function (){
    console.log("welcome");
 }
}
// console.log(user.address);
// sol 1
// if(user.address !== undefined){
//     console.log(user.address.city);
// }
// else{
//     console.log("Address not found");
// }

//sol 2
// console.log(user.address?.city);
user.getDisplaymessage();
console.log(user.displayMessage?.());
console.log(user.hobbies?);