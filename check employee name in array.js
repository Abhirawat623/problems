const employees = [
    {
        name: "Prakash",
        numOfYears: 5
    },
    {
        name: "Ashish",
        numOfYears: 3
    },
    {
        name: "Riya",
        numOfYears: 1
    },
    {
        name: "Jay",
        numOfYears: 1
    },
    {
        name: "Chinmoy",
        numOfYears: 5
    }
]

const result = employees.filter(employee => employee.numOfYears > 3).map(employee => employee.name);
console.log(result);

const res = employees.filter(data=> data.numOfYears>5).map(data =>data.name);
console.log(res)