// // const obj ={
// //     name:"abhishek",
// //     displayMessage : function(){
// //         console.log("hello " +obj.name);//implicit binding
// //     },
// // };
// // // obj.displayMessage();

// // function calculateSum(){
// //     console.log(this);
// // }
// // calculateSum();
// // console.log(this);
// // this.alert("hey");
// const user1={
//     name:"Ashu",
//     showName : function(){
//         console.log(this.name);
//     }
// };

// const user2={
//     name:"Abhsiek",
//     showName : function(){
//         console.log(this.name);
//     }
// };

// const user3={
//     name:"naman",
//     showName : function(){
//         console.log(this.name);
//     }
// };

// user1.showName();
// user2.showName();
// user3.showName(); //explicit binding


const user1={
    name:"Ashu",
    showName : function() {
       function showMe(){
        console.log(this.name);
       }}}


user1.showName();