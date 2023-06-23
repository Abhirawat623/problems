//In case of race, the first settled value r

 


let promise1 = new Promise((resolve)=>{
 setTimeout(()=> resolve("promise 1 solved"),5000)
});

let promise2 = new Promise((_, reject)=>{
    setTimeout(()=>reject("promise 2 not solved"),1000)
});

let promise3 = new Promise ((resolve)=>{
    setTimeout(()=>resolve("promise 2 solved"),5000)
});

let arrAll = [ promise1, promise2, promise3];
promiseAll = Promise.race(arrAll);

promiseAll.then((response)=>console.log(response));