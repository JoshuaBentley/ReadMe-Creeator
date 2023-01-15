const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
    type: 'input',
    name: 'project',
    message: 'What is the name of your project?'
}
]

inquirer.prompt(questions)
    .then( answers => 
        console.log(`My project name is ${answers.project}`)
)
