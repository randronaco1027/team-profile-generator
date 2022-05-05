const inquirer = require('inquirer')

const promptEngineer = employeeData => {
    if (!employeeData.employees) {
        employeeData.employees = []
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please provide engineer name"
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide engineer GitHub'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide engineer email'
        },
        {
            type: 'confirm',
            name: 'confirmAddEngineer',
            message: 'Would you like to add another engineer?',
            default: false
        }
    ])
    .then(employeeReturn => {
        employeeData.employees.push(employeeReturn)
        if (employeeReturn.confirmAddEngineer) {
            return promptEngineer(employeeData)
        } else {
            return employeeData
        }
    })
}

module.exports = promptEngineer