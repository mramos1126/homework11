
var Students = require('./student.js');
//var studentBus = new bus();
var Bus = function(studentsOnTheBus , driverName , color , gas ,studentEnterBus, busChatter){
var studentsOnTheBus = [];
this.driverName = driverName;
this.color= color;
this.gas = gas;
this.studentEnterBus=function(name, gender, grade, gpa, detentions, sleepingInClass ){
this.studentsOnTheBus.push(new studentBus(name, gender, grade, gpa, detentions, sleepingInClass ));
};
this.busChatter= function(catchPhrase){
this.studentsOnTheBus.push(new studentBus(catchPhrase));
};
};

module.exports = Bus;
