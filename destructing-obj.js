// let obj ={
//     name:"Abhishek",
//     address:{
//         state:"MH",
//         city: "Mumbai",
//         locality:"India"
//     },
//     coarses :["Html", "css", "js", "react" ,"js", "redux"]
// }

// let { name,...rest}=obj;
// console.log(rest);

// let {name:username}= obj;
// // console.log(username)
// // console.log(typeof username)
// console.log(name)



// let {coarses, address: {city,state,localilty},name}= obj;
// console.log(city);

const employees ={
engineers:{
em1:{
    id:1,
    name:"prakash",
    occupation:"front end"},
    em2:{
        id:2,
        name:"Ashish",
        occupation:"back end"},
},placement:{
    em3:{
        id:3,
        name:"Salsk",
        occupation:"senior"
    }
},youtube:{
 em4:{
    id:4,
    name:"Sumit",
    occupation:""
 }
}
}
// let {engineers:{em2:{name,occupation}}}=employees;
// console.log(name,occupation)

let {youtube:{em4:{name,occupation}}} = employees;

console.log(name,occupation)

