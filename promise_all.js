// allsettled is exactly like .all but in all you would get every promoises as an error if any one has error,,
//but in allsettled we get every promises with both resolved and rejected



let promise1 = new Promise((resolve)=>
setTimeout(()=> resolve("promise 1 resolved")),1000);

let promise2 = new Promise((resolve)=>
setTimeout(()=> resolve("promise 1 resolved")),2000);

let promise3 = new Promise((__,reject)=>
setTimeout(()=> reject("promise 1 rejected")),3000);


let arrAll =[promise1, promise2, promise3];
let promises = Promise.allSettled(arrAll);

promises.then((response)=> console.log(response));