function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let student1 = new Student("Harry", "male", "17");
let student2 = new Student("Ron", "male", "18");
let student3 = new Student("Hermione", "female", "18");

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
if(this.marks === undefined){ 
  this.marks = [mark]
  } else {
    this.marks.push(mark)
  }  
}

Student.prototype.addMarks = function (...mark) {
if(this.marks === undefined){ 
  this.marks = []
  } 
 mark.forEach(mark => this.marks.push(mark))
}

Student.prototype.getAverage = function () {
if(this.marks === undefined){ 
  return 0
  } 
let sum = 0; 
let quantity = 0;
 this.marks.forEach(function (mark){
   sum += mark;
   quantity ++
 });
return sum / quantity;
}

Student.prototype.exclude = function (reason) {
delete(this.subject);
delete(this.marks);
this.excluded = reason;
}