var employees = [
    { id: 1, name: "jay", salary: 10000 },
    { id: 2, name: "vijay", salary: 20000 },
    { id: 3, name: "rohit", salary: 15000 },
    { id: 4, name: "keya", salary: 22000 },
    { id: 5, name: "pankaj", salary: 30000 },
    { id: 6, name: "Rahul", salary: 40000 },
];
//const number = [10,20,30,80,90,100,200,400];
function findNumbers(employees, key, val) {
    return employees.some(function (arrVal) { return val === arrVal[key]; });
    // return !!employees.find((arrVal) => val === arrVal[key]);
    // return employees.find((arrVal) => val === arrVal[key]) ?true : false;
}
console.log(findNumbers(employees, 'salary', 22000));
