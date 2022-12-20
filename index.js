const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const questions = {
  Manager: [
    {
      type: "input",
      name: "name",
      message: "What is manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is manager's Id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is manager's Email address?",
    },
    {
      type: "number",
      name: "officeNumber",
      message: "What is manager's Office Number?",
    },
    {
      type: "list",
      name: "addNew",
      message: "Do you want to add other employee?",
      choices: ["Yes", "No"],
    },
  ],

  Engineer: [
    {
      type: "input",
      name: "name",
      message: "What is engineer's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is engineer's Id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is engineer's Email address?",
    },
    {
      type: "input",
      name: "gitHub",
      message: "What is engineer's GitHub username?",
    },
    {
      type: "list",
      name: "addNew",
      message: "Do you want to add other employee?",
      choices: ["Yes", "No"],
    },
  ],

  Intern: [
    {
      type: "input",
      name: "name",
      message: "What is intern's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is intern's Id?",
    },
    {
      type: "input",
      name: "email",
      message: "What is intern's Email address?",
    },
    {
      type: "input",
      name: "school",
      message: "What is intern's school?",
    },
    {
      type: "list",
      name: "addNew",
      message: "Do you want to add other employee?",
      choices: ["Yes", "No"],
    },
  ],
};

const chooseEmployeeType = [
  {
    type: "list",
    name: "employeeType",
    message: "Please choose type of employee:",
    choices: ["Manager", "Engineer", "Intern"],
  },
];

// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, (err) =>
//     err ? console.error(err) : console.log("success created file")
//   );
// }

//  Create a function to get employee information
function generateTeam() {
  // ask for type of employee
  inquirer.prompt(chooseEmployeeType).then((answers) => {
    // if type of employee is Manager
    if (answers.employeeType === "Manager") {
      inquirer.prompt(questions.Manager).then((response) => {
        const manager = new Manager(
          response.name,
          response.id,
          response.email,
          response.officeNumber
        );
        console.log(manager);
        // ask for add new employee or not
        if (response.addNew === "Yes") {
          generateTeam();
        }
      });
      // if type of employee is Engineer
    } else if (answers.employeeType === "Engineer") {
      inquirer.prompt(questions.Engineer).then((response) => {
        const engineer = new Engineer(
          response.name,
          response.id,
          response.email,
          response.gitHub
        );
        console.log(engineer);

        // ask for add new employee or not
        if (response.addNew === "Yes") {
          generateTeam();
        }
      });
      // if type of employee is Intern
    } else if (answers.employeeType === "Intern") {
      inquirer.prompt(questions.Intern).then((response) => {
        const intern = new Manager(
          response.name,
          response.id,
          response.email,
          response.school
        );
        console.log(intern);
        // ask for add new employee or not

        if (response.addNew === "Yes") {
          generateTeam();
        }
      });
    }
  });
}

// Function call to initialize app
generateTeam();
