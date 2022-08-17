//  Included packages needed for this application
const inquirer  = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

//  an array of questions for user input
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
            message: 'license ?',
            name: 'license',
            choices:['MIT','ISC','GNUPLv3','none'],
            filter(val){
                return val.toLowerCase();
            }
          },

];

//  a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,(err) =>
  err ? console.error(err) : console.log('Success!')
);
}

//  function to initialize app
function init() {
    // gets data from user 
    inquirer.prompt(questions).then(function(data){
        console.log(data)
// converts all data to new data 
const newData = generateMarkdown(data)
        // write newData to the README.md 
       writeToFile('READMEgenerated.md', newData)
    })
}

// Function call to initialize app
init();
