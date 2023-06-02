// const display = "i love to code in dark";
// const vowels ="aeiou";
// for ( let char of display){
//     if ( vowels.includes(char)){
//     console.log(`${char} are vowels`)}
// }


// const display = "i love to code in dark";
// const vowels ="aeiou";
// for ( let char of display){
//     if (vowels.includes(char)){
//         console.log(`${char} there are vowels`);
//     }
//     else{
//         console.log("No");
//     }
// }

for ( let char of display){
    if (vowels.includes(char)){
        flag =true;
        break;
    }
    else{
       flag =false;
    }
}

if (flag === true){
    console.log("string has vowels")
}
else{
    console.log("string doesnt have vowels")
}