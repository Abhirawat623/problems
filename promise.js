// bankHotelApi(hotelId, function(){
// paymentApi(hotelId, function(){
//     showStatusApi()
// })
// })
// let promise = bookHotelApi(hotelId) 

const URL ="https://replit.com";
let promise = fetch(URL);
// console.log(promise)
promise.then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
}).catch(function(error){
    console.log("error occured",error)
});