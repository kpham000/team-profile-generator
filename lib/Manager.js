// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name,id,email,github){
        super(name,id,email,github);
        this.getRole='Manager';
        this.officeNum=officeNum
    }
}

module.exports = Manager