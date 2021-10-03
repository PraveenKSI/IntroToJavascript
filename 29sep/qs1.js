// Q1. Create a hierarchy of person, employee and developers.
function Developer(){
    this.post = "Software Engineer";
}

function Employee(){
    this.CompanyName = "ToTheNew";
}
Employee.prototype = new Developer();

function Person(){
    this.fname = "Praveen";
    this.age = "22";
    this.gender = "Male";
}
Person.prototype = new Employee();

let prsn = new Person();

console.log(`${prsn.fname} is an employee of ${prsn.CompanyName} as a ${prsn.post}`);