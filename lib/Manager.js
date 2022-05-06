const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.office = officeNumber
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager