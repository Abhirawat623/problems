const mob="8860762668"
const masked = '*'.repeat(4);
const last = mob.length-4;
const newPass = mob.slice(0, last)+ masked;
console.log(newPass)