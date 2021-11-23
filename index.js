const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./util/generateHtml");

const empArr = [];
const manArr = [];
const engArr = [];
const intArr = [];


function addManager() {
    inquirer.prompt([
        {
        message:"Team manager's name",
        type: "input",
        name:"manName",
        },{
        message:"Team manager's employee ID?",
        type: "input",
        name:"manId"
        },{
        message:"Team manager's email?",
        type: "input",
        name:"manEmail"
        },{
        message:"Manager's office number?",
        type: "input",
        name:"manOffice"
        }
    ]).then(manAnswers => {
        const myManager = new Manager(manAnswers.manName, manAnswers.manId, manAnswers.manEmail, manAnswers.manOffice);
        empArr.push(myManager);
        manArr.push(myManager);
        insertEngInt();
    })
}

function insertEngInt() {
    inquirer.prompt(
        {
        message:"Add engineer or intern?",
        type: "list",
        name:"teamChoice",
        choices:["Add an engineer","Add an intern", "complete team"]
        })
        .then(answers => {
        switch (answers.teamChoice) {
            case "Add an engineer":
                console.log("Adding an engineer")
                addEngineer();
                break;
            case "Add an intern":
                console.log("Adding an intern")
                addIntern();
                break;
            default:
                console.log('Done');
                fs.writeFile(`MyTeam.html`, generateHTML(empArr), (err) =>
                err ? console.error(err) : console.log('HTML Created!')
                );
        }
    })
}

function addEngineer() {
    inquirer.prompt([
        {
        message:"Engineer's Name",
        type: "input",
        name:"engName",
        },{
        message:"Engineer's employee ID",
        type: "input",
        name:"engId"
        },{
        message:"Engineer's email",
        type: "input",
        name:"engEmail"
        },{
        message:"Engineer's github username",
        type: "input",
        name:"engGitHub"
        }
    ]).then(engAnswers => {
        const myEngineer = new Engineer(engAnswers.engName, engAnswers.engId, engAnswers.engEmail, engAnswers.engGitHub);
        empArr.push(myEngineer);
        engArr.push(myEngineer);
        insertEngInt();
    })

}

function addIntern() {
    inquirer.prompt([
        {
        message:"Intern's name",
        type: "input",
        name:"intName",
        },{
        message:"Intern's employee ID",
        type: "input",
        name:"intId"
        },{
        message:"Intern's email",
        type: "input",
        name:"intEmail"
        },{
        message:"Intern's school",
        type: "input",
        name:"intSchool"
        }
    ]).then(intAnswers => {
        const myIntern = new Intern(intAnswers.intName, intAnswers.intId, intAnswers.intEmail, intAnswers.intSchool);
        empArr.push(myIntern);
        intArr.push(myIntern);
        insertEngInt();
    })
}

addManager();