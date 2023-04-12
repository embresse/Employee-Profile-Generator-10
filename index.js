const inquirer = require('inquirer');
const createHTML = require('./src/createHTML');
const fs = require('fs');
const path = require('path');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employeeArray = [];


const manager = [
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
    inquirer
        .prompt(manager)
        .then((answers) => {
            var manager = new Manager(answers.name, answers.id, answers.email, answers.officenumber);
            employeeArray.push(manager);
            addEmployee();
        });
};

const engineer  = [
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
    inquirer
        .prompt(engineer)
        .then((answers) => {
            var engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employeeArray.push(engineer);
            addEmployee();
        });
};

const intern  = [
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
    inquirer
        .prompt(intern)
        .then((answers) => {
            var intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            employeeArray.push(intern);
            addEmployee();
        });
};

function addEmployee(){
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

  
  

function init() {
    managerPrompt();
};

init();