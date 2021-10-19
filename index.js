const inquirer = require("inquirer");
const Employee = require("./lib/Employee");

class Directory {
    constructor() {
        this.nameEmployee=getName();
    }
    nextEmployee() {
        this.currentEmployee= new Employee(getName());
    }
}

