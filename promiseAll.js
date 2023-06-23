// let promise1 = new Promise((resolve,reject)=>
// setTimeout(()=>resolve("Promise 1 done"),1000))   //for 1

// let promise2= new Promise((resolve,reject)=>
// setTimeout(()=>resolve("Promise 2 done"),1000)) //for 2

// let promise3 = new Promise((resolve,reject)=>
// // setTimeout(()=>resolve("Promise 3 done"),1000)) //for 3
// setTimeout(()=>reject("Promise 3 rejected"),1000))//for 3

// let arrAll = [ promise1, promise2, promise3];  //for all promises   //this array goes secondly


// // for putting all the promises together//

// let promiseAll = Promise.all(arrAll);
// promiseAll.then((resolve)=>console.log(resolve)).catch((err)=>console.log(err)); // this goes first




// // promise1.then((resolve)=>console.log(resolve))
// // promise2.then((resolve)=>console.log(resolve))
// // promise3.then((resolve)=>console.log(resolve))

let users = ["prakash", "Ashish"];

let arrAll = users.map((user)=>
fetch(`https://api.github/users/${user}`));

let promise =Promise.all(arrAll);
promise.then((response)=>response.forEach((data)=>console.log(data.url))).catch((err)=> console.log(err))