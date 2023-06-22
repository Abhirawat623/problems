const familyMembers = [
{name: "Abhishek",
    age:24

},
{name: "Anku",
    age:21

},
{name: "Sunita",
    age:46

},
{name: "Rakesh",
    age:50

},
{name: "Ankit",
    age:10

}
];


const totalAge= familyMembers.reduce((acc,cur)=> acc +cur.age ,0     )
const average = totalAge /familyMembers.length;
console.log(average);