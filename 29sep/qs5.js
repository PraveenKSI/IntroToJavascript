let invokeCount = 0;
function greet(name){
    invokeCount++;
    console.log("Welcome " + name);
}

greet("Mohan");
greet("Rohan");
greet("Sohan");

console.log("The no of times the function greet was invoked is: " + invokeCount);