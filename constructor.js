// function User(){

// (this.name="marvel comics"), (this.year=1985);
// }

// const book = new  User();
// console.log(book);
// // console.log(this);
// console.log(book.name);
// console.log(book.year);

function Influencer(name,platform){
    (this.name =name), (this.platform=platform);
}
const user1 = new Influencer("Abhsihek","Pvr");
const user2= new Influencer("Sumit","Inox");
console.log(user1,user2);