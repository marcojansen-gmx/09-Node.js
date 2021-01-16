const fs = require("fs");
const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        message: "test?",
        name: "testAnswer",
    },
    {
        type: "input",
        message: "test?",
        name: "testAnswer",
    },
]).then ((response) => {

});
