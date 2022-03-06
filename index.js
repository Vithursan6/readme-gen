// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project Title? (Required)',
        validate: titleIn => {
            if (titleIn) {
                return true;
            } else {
                console.log('Please enter title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubName',
        message: 'What is your GitHub Username? (Required)',
        validate: githubIn => {
            if (githubIn) {
                return true;
            } else {
                console.log('Please enter GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: githubIn => {
            if (githubIn) {
                return true;
            } else {
                console.log('Please enter email address!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'function1',
        message: 'What is the function of you app? (Required)',
        validate: funcIn => {
            if (funcIn) {
                return true;
            } else {
                console.log('Please enter a valid function!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'objective1',
        message: 'What is the objective of project? (Required)',
        validate: objIn => {
            if (objIn) {
                return true;
            } else {
                console.log('Please enter an objective!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for application: (Required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please provide installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions: (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter usage instructions!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
    {
        type: 'confirm',
        name: 'confContribute',
        message: 'Allow contributers?',
        default: true
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Guidelines for contributiions: (Required)',
        when: ({ confContribute }) => {
            if (confContribute) {
                return true;
            } else {
                return false;
            }
        },
        validate: contIn => {
            if (contIn) {
                return true;
            } else {
                console.log('Please enter contributer guidelines!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide instructions on how to test the app. (Required)',
        validate: testIn => {
            if (testIn) {
                return true;
            } else {
                console.log('Please enter your use test instructions!');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {

        fs.writeFile(`./dist/${fileName}`, data, err => {
            if (err) {
                throw err
            };
            console.log('SUCCESS! CHECK "./dist folder!"')

            });
        
    
};

// TODO: Create a function to initialize app
function init() {

    return inquirer.prompt(questions);
};

init()
    .then(userResponse => generateMarkdown(userResponse))
    .then(readmeMD =>  writeToFile('README.md', readmeMD))
    .catch(err => {
        console.log(err);
    });

