var prompt = require('prompt')
var bus = require("./bus.js")
var Student = require('./student.js');
prompt.start();

prompt.get(['name', 'gender' , 'grade' , 'gpa', 'detentions', 'sleepingInClass' , 'catchPhrase'], function (err, result) {

 newName = result.name;
 newGender = result.gender;
 newGrade = result.grade;
 newGpa = result.gpa;
 newSleeping = result.sleepingInClass;
 newCatchPhrase = result.catchPhrase;

// console.log(result.gender);
// console.log(result.detentions);
// console.log(result.sleepingInClass);
// console.log(result.catchPhrase);

var MainBus = new bus(newName, newGender, newGrade, newGpa, newSleeping, newCatchPhrase);
	console.log(MainBus);
var NewStudent = new Student(newName, newGender, newGrade, newGpa, newSleeping, newCatchPhrase);
NewStudent.canStudentHaveFun();


	});