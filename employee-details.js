var employees = [
    { id: 1, name: "jay", salary: 10000 },
    { id: 2, name: "vijay", salary: 20000 },
    { id: 3, name: "rohit", salary: 15000 },
    { id: 4, name: "keya", salary: 22000 },
    { id: 5, name: "pankaj", salary: 30000 },
    { id: 6, name: "Rahul", salary: 40000 },
    { id: 7, name: "shreyanshi", salary: 32000 },
    { id: 8, name: "laxman", salary: 25000 },
    { id: 9, name: "sanket", salary: 35000 },
];
// const employees2 = employees.filter((emp) => {return emp > 25000}).map((id)=>{return id})
// console.log(employees);
/**
 * to get employee ids which are greater than or equal to target salary
 * @param {*} employees given employees array
 * @param {*} targetSalary minimum salary limit
 * @returns
 */
function getEmployeeIds(employees, targetSalary) {
    if ((employees === null || employees === void 0 ? void 0 : employees.length) && targetSalary) {
        return employees
            .filter(function (oEmployee) { return oEmployee.salary >= targetSalary; })
            .map(function (oEmployee) { return oEmployee.id; });
        return [];
    }
}
console.log(getEmployeeIds(employees, 25000));
