
// // //TDZ starts here

// // console.log(y)
// // // console.log(x)
// // console.log(4);
// // let x= 10;  // TDZ ends
// // var y =475;

// let a = 10;
// {
//     console.log(a);

// let a =20;}   // reference error

function foo (){
    console.log(a);
    let a = 20;
}
foo();