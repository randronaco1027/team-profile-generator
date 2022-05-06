const fs = require('fs')
const inquirer = require('inquirer')
const generateHtml = require('./utils/generate-html')
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Choice = require('inquirer/lib/objects/choice')

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter ID number'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter email'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter office number'
        }
    ])
}

const nextEmployee = employeeData => {
    if (!employeeData.employees) {
        employeeData.employees = []
    }
    return inquirer.prompt([
        {
            type: 'choice',
            name: 'position',
            message: 'Please choose type of Employee',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Please provide name"
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please provide ID'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide email'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide engineer GitHub',
            when: (input) => input.position === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please provide intern school',
            when: (input) => input.position === 'Intern'
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
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
.then(nextEmployee)
.then(data => {
    console.log(data)
    const generateContent = generateHtml(data)
    fs.writeFileSync('./dist/index.html', generateContent)
})