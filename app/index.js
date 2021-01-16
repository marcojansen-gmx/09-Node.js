const fs = require("fs");
const inquirer = require("inquirer");
let readme;

const promise = inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        },
        {
            type: "input",
            message: "Please give us a brief description about your project!",
            name: "description",
        },
        {
            type: "input",
            message: "Please complete the INSTALLATION section of your readme file!",
            name: "installation",
        },
        {
            type: "input",
            message: "Please complete the USAGE section of your readme file!",
            name: "usage",
        },
        {
            type: "input",
            message: "Please complete the CONTRIBUTING section of your readme file!",
            name: "contributing",
        },
        {
            type: "input",
            message: "Please complete the TEST section of your readme file!",
            name: "test",
        },
        {
            type: "list",
            message: "Please give us a brief description about your project!",
            choices: ["none", "BSD", "MIT", "GPL"],
            name: "licence",
        },
]);

promise.then ((response) => {
    // console.log(response);
    const {title, description, installation, usage, contributing, test, licence} = response;
    // console.log(title, description, installation, usage, contributing, test, licence);
    readMe = `# Title
${title}
      
## Description
${description}
      
## Table of Contents
          
* [Installation](#Installation)
* [AcceptanceCriteria](#AcceptanceCriteria)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Test](#Test)
* [Licence](#Licence)
         
## AcceptanceCriteria (example)
          
<!-- GIVEN I am feeling like taking a quiz challenge
WHEN when I open the page
THEN a start button is displayed to start a quiz
WHEN push the start button
THEN a quiz is starting which contains harry potter and lord of the rings characters
WHEN I push the lord of the rings or harry potter button
THEN my answer needs to be correct to increase my score
WHEN I get through my 10 questions or the timer is exceeded
THEN I get my final result
WHEN I enter my initials and submit
THEN my score gets saved for me even if I refresh the page
WHEN I have submited my score
THEN my score gets displayed on a highscore page
-->
          
## Installation
${installation}
    
## Usage
${usage}
      
## Contributing
${contributing}
     
## License
         
The project uses the following licence: ${licence}`;


// console.log(readMe);
    fs.writeFile('README.md', readMe, (err) => {
        err ? console.error(err) : console.log('Success!')
    });
});
