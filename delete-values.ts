type Employee = {
    id: number;
    name: string;
    salary: number;
  };
const employees:Employee[] = [
    { id: 1, name: "jay", salary: 10000 },
    { id: 2, name: "vijay", salary: 20000 },
    { id: 3, name: "rohit", salary: 15000 },
    { id: 4, name: "keya", salary: 22000 },
    { id: 5, name: "pankaj", salary: 30000 },
    { id: 6, name: "Rahul", salary: 40000 },
    { id: 7, name: "shreyanshi", salary: 32000 },
    { id: 8, name: "laxman", salary: 42000 },
    { id: 9, name: "sanket", salary: 50000 },
  ];
//   const x = employees.map((emp)=>{
//     delete emp.salary;
//     return emp;
//   })
//   console.log(x)


  function DeletePassValues(employees:Employee[],key:number|string){
    return employees.map((emp)=>{
        delete emp[key]; // emp['salary']
        return emp;
      })
  }
  console.log(DeletePassValues(employees,'id'))