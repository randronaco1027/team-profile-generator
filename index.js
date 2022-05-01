const fs = require('fs')
const inquirer = require('inquirer')
const generateHtml = require('./utils/generate-html')

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter email'
        },
        {
            type: 'input',
            name: 'role',
            message: 'Please enter GitHub'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter school'
        }
    ])
}

const promptNextEmployee = () => {
    return inquirer.prompt(
        {
            type: 'list',
            name: 'employeeType',
            message: 'Please select type of employee',
            choices: ['Engineer', 'Intern']
        }
    )
}

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
promptManager()
.then(promptNextEmployee)
.then(promptIntern)
.then(promptEngineer)
.then(data => {
    console.log(data)
    const generateContent = generateHtml(data)
    fs.writeFileSync('./README.md', generateContent)
})