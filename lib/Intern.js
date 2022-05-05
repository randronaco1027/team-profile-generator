const inquirer = require('inquirer')

const promptIntern = employeeData => {
    if (!employeeData.employees) {
        employeeData.employees = []
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please provide intern name'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide intern GitHub'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide intern email'
        },
        {
            type: 'confirm',
            name: 'confirmAddIntern',
            message: 'Would you like to add another intern?',
            default: false
        }
    ])
    .then(employeeReturn => {
        employeeData.employees.push(employeeReturn)
        if (employeeReturn.confirmAddIntern) {
            return promptIntern(employeeData)
        } else {
            return employeeData
        }
    })
}

module.exports = promptIntern