// TODO: Include packages needed for this application
const inquirer  = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
  type: 'input',
    message: 'Project Title ?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Project discription ?',
    name: 'discription',
        },
        {
          type: 'input',
          message: 'project usage:',
          name: 'usage',
        },
        {
          type: 'input',
          message: 'installation instructions ?',
          name: 'installation',
        },
    {
        type: 'input',
          message: 'conrtibution info ?',
          name: 'conrtibution',
        },
        {
          type: 'input',
          message: 'for questions or report as issue(email)?',
          name: 'email',
        },
        {
          type: 'input',
          message: 'for questions(github)?',
          name: 'github',
        },{
            type: 'list',
            message: 'license?',
            name: 'license',
            choices:['MIT','ISC','GNUPLv3'],
            filter(val){
                return val.toLowerCase();
            }
          },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,(err) =>
  err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app
function init() {
    // gets data from user 
    inquirer.prompt(questions).then(function(data){
        console.log(data)
// coverts all data to new data 
const newData = generateMarkdown(data)
        // write new data to the README.md 
       writeToFile('README.md', newData)
    })
}

// Function call to initialize app
init();
