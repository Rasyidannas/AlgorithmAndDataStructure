// Data structure are collections of values, the relationships among them, and the functions or operations that can be applied to the data.

class Student {
  //this will auto run when instantiate
  constructor(firstName, lastName, year) {
    this.firstName = firstName; //this store as property (firstName, lastName, grade)
    this.lastName = lastName;
    this.grade = year;
  }
}

//this is instantiate
const student1 = new Student("Ciko", "Mentul", 4);

console.log(student1);
console.log(student1.firstName);
