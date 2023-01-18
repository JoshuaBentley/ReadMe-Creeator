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
        name: 'help',
        message: 'What is the name of everyone who worked on this application?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Descripe what this application dose.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do I install this application?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your name on github?'
    },
    {
        type: 'input',
        name: 'phoneNumber',
        message: 'What is your phone number?'
    },




]

inquirer.prompt(questions)
    .then( answers => {
        createReadme(answers)
    }    
);

const createReadme = data => {
    const readmeContents = `
    #${data.project}!
    
    ## Table of Contents
        -[Contributers](#Contributers)
        -[Purpose](#purpose)
        -[Installation](#Installation)
        -[Questions](#Questions)
    
    ## Contributers
        -${data.help}
    
    ## Purpose 
        -${data.description}
    
    ## Installation
        -${data.installation}

    ## Questions
    ### If you need to reach me with any additional quetions please reach out to me through any of the following ways!
        -${data.email}
        -${data.phoneNumber}
        -[${data.github}](https://github.com/JoshuaBentley)
        
    ` 
    fs.writeFile('README.md', readmeContents, (err) => {
        if (err) { 
            console.log(err)
        } else {
            console.log('Enjoy your README')
        }    
    })
    console.log(readmeContents)
}
