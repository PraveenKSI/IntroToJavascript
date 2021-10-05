// 3.Write a program to implement inheritance upto 3 classes.The Class must  public variables and static functions.

class Person {
    first = "";
    last = "";
    age = 0;
    constructor(first, last, age) {
      this.name = {
        first,
        last
      };
      this.age = age;
    }
  
    greeting() {
      console.log(`Hi! I'm ${this.name.first}`);
    };
  
    farewell() {
      console.log(`${this.name.first} has left the building. Bye for now!`);
    };
  }

  class Employee extends Person{
      empno = 0;
      dept  = "";
      constructor(first , last , age ,empno , dept){
          super(first, last, age);
          this.empno = empno;
          this.dept = dept;
      }
  }

  class Developer extends Employee{
      exp = 0;
      competency = "";
      constructor(first , last , age ,empno , dept,competency , exp){
          super(first , last , age ,empno , dept);
          this.competency = competency;
          this.exp = exp;
      }
      static printGreeting(){
          console.log("Welcome");
      }
  }

  let p1 = new Developer("Rohan","Singh",34,"2678T","Frontend","MERN",2);
  p1.farewell();

  Developer.printGreeting();
