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
