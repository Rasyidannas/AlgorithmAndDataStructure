// Data structure are collections of values, the relationships among them, and the functions or operations that can be applied to the data.

class Student {
  //this will auto run when instantiate
  constructor(firstName, lastName, year) {
    this.firstName = firstName; //this store as property (firstName, lastName, grade)
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }

  //this are the methods
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;

    if (this.tardies >= 3) {
      return "YOU ARE EXPELLED!!!";
    }

    return `${this.firstName} ${this.lastName} has been late ${this.tardies}`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    const sum = this.scores.reduce((a, b) => a + b);
    return sum / this.scores.length;
  }

  // this is static methods(it should call without Instantiate)
  static enrollStudents() {
    return "ENROLLING STUDENTS!";
  }
}

//this is instantiate
const student1 = new Student("Ciko", "Mentul", 4);

console.log(student1);
console.log(student1.firstName); //this is for call property
console.log(student1.fullName()); //this is for call methods
console.log(student1.markLate()); //this is for call methods
console.log(student1.addScore(12)); //this is for call methods
console.log(student1.addScore(12)); //this is for call methods
console.log(student1.calculateAverage()); //this is for call methods

console.log(Student.enrollStudents()); //this is for call static methods
