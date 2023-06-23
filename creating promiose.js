
// const dataRecieved =false; ///the data arrived true or false;---> will through error
const dataRecieved =true; //for true database needed to fullfill the promise and would shown in the .then
const dataBase=[       //this is database
    {id:1,name:"Abhishek"},
    {id:2, name:"Ashish"}, 
    {id:3, name:"Anand"},
    {id:4, name:"Dhanush"},
    {id:5, name:"Rishabh"},
    {id:6, name:"Sushant"},
    {id:7, name:"Tarun"},
]
const promise = new Promise((resolve,reject)=>{//two parameters needed first is resolve and other is reject
if(dataRecieved){   //this should be true so promise can be fulfilled;
setTimeout(()=> resolve(dataBase),3000);///when api gettting dataa
}
else{
const error = new Error("something went wrong") //when it is rejected or any error occured
reject(error.message) //if you write only error then it would show everything so just write message wwith it 
}
});

promise.then((response)=>console.log(response)).catch((function (erCanWriteAnythingForAboveError){
    console.log(erCanWriteAnythingForAboveError);
}))