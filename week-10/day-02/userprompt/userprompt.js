// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

const inquirer = require('inquirer');
inquirer.prompt([
  {
    type: "password",
    name: "password",
    message: "Enter a password"

  },
  {
    type: "input",
    name: "username",
    message: "What is your name?"
  },
  {
    type: "list",
    name: "usercolor",
    message: "What is favorite color?",
    choices: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Puce", "Chartreuse",]
  },
  {
    type: "checkbox",
    name: "userchoice",
    message: "What is the average land speed of an unlaiden swallow?",
    choices: ["European?", "African?"]
  },
  {
    type: "confirm",
    name: "confirm",
    message: "Are you sure about that?",
    defualt: true
  }
  
]).then((response)=>{
  console.log(response);
});