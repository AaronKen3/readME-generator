// array of questions for user
const inquirer = require("inquirer");
const fs = require("fs");
const { prompt } = inquirer;
const generateMarkdown = require("./utilities/generateMarkdown");
const choices = require("inquirer/lib/objects/choices");

const questions = [
  {
    type: "input",
    name: "title",
    message: "Project name?",
  },
  {
    type: "input",
    name: "description",
    message: "Type project description",
  },
  {
    type: "input",
    name: "installation",
    message: "What are instructions for installation?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the project used for?",
  },
  {
    type: "input",
    name: "license",
    message: "Provide a license",
    choices: ["MIT", "ISC", "APACHE 2.0", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide the parties that contributed to this project",
  },
  {
    type: "input",
    name: "test",
    message: "Provide the tests of the project",
  },
  {
    type: "input",
    name: "username",
    message: "Type github username",
  },
  {
    type: "input",
    name: "email",
    message: "Type email address",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw err;
    }
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkdown(answers));
  });
}

// function call to initialize program
init();
