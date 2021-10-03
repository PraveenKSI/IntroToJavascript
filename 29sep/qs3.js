//The difference between call and apply is in how arguments are declared

//In Call arguments are declared as "object.objectMethod.call( objectInstance, arguments )"

//In Apply arguments are declared as "object.objectMethod.apply(objectInstance, arrayOfArguments)"

let obj1 = {
    name:"Praveen",
    age:22
}
let obj2 = {
    name:"Rohit",
    age:23
}
function print(city,state){
    console.log(`Age of ${this.name} is ${this.age} and lives in ${city} , ${state}`);
}

print.call(obj1,"New Delhi","Delhi");


print.apply(obj2,["Lucknow","UP"]);