const inquirer = require('inquirer');
const createHTML = require('./src/createHTML');
const fs = require('fs');
const path = require('path');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employeeArray = [];
// empty array that new employees will be added to


const manager = [
    // manager questions
    {
        type: 'input',
        message: 'Manager name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Manager email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Manager ID?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Office number?',
        name: 'officenumber'
    },
];

function managerPrompt() {
    // initiates prompt for manager questions
    // adds new manager to employee array
    inquirer
        .prompt(manager)
        .then((answers) => {
            var manager = new Manager(answers.name, answers.id, answers.email, answers.officenumber);
            employeeArray.push(manager);
            addEmployee();
        });
};

const engineer  = [
    // engineer questions
    {
        type: 'input',
        message: 'Engineer name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Engineer email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Engineer ID?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Github?',
        name: 'github'
    },
];

function engineerPrompt() {
    // prompts engineer questions
    // adds new engineer to employee array
    inquirer
        .prompt(engineer)
        .then((answers) => {
            var engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employeeArray.push(engineer);
            addEmployee();
        });
};

const intern  = [
    // intern questions
    {
        type: 'input',
        message: 'Intern name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Intern email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Intern ID?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Intern school?',
        name: 'school'
    },
];

function internPrompt() {
    // function will prompt intern questions 
    // adds new intern to employee array
    inquirer
        .prompt(intern)
        .then((answers) => {
            var intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            employeeArray.push(intern);
            addEmployee();
        });
};

function addEmployee(){
    // called within each prompt function
    inquirer
    .prompt({
      type: 'list',
      message: 'Add another employee?',
      name: 'addEmployee',
      choices: ['Engineer', 'Intern', 'Finished'],
    })
    .then((answer) => {
      switch (answer.addEmployee) {
        case 'Engineer':
          engineerPrompt();
          break;
        case 'Intern':
          internPrompt();
          break;
        default:
          writeToFile("index.html", employeeArray);
      }
    });
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, createHTML(data), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  }
// fs.writeFile to generate html based on prompts
  
  

function init() {
    managerPrompt();
};
// init function to initialize app

init();