const Student = require("Student.js");
const inqurier = require("inquirer");

let classes = [];

const Class = function () {
  this.students = [];
  this.number = this.students.length;
  this.prof = "Mr. Buttersworth";
  this.room = 212;
  this.NewStudent = Student();
}

inqurier.prompt([
  {
    type: "list",
    name: "select",
    message: "What would you like to do? ",
    choices: ["Add a class", "Add a student"]
  }
]).then(function(response){
  switch (response.name){
    case "Add a class":
      addClass();
      break;
    case "Add a student":
      addStudent();
      break;
  };
});