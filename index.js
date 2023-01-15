const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'project',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'linkdin',
        message: 'What is your linkdin?'
    }

]

inquirer.prompt(questions)
    .then( answers => {
        createReadme(answers)
    }    
);

const createReadme = data => {
    const literal = `
    # The name of my projerct is ${data.project}!
    ## If you have questions about it please got to me linkdin ${data.linkdin}! 
    ` 
    console.log(literal)
}
