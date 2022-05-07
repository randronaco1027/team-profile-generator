const fs = require('fs')
const inquirer = require('inquirer')
const generateHtml = require('./utils/generate-html')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const teamMembers = []

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
        .then(mgrData => {
            const { name, id, email, officeNumber } = mgrData
            const manager = new Manager(name, id, email, officeNumber)

            teamMembers.push(manager)
        })
}

const nextEmployee = employeeData => {
    return inquirer.prompt([
        {
            type: 'list',
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
            default: false,
        }
    ])
        .then(employeeReturn => {
            let {position, name, id, email, github, school, confirmAddEmployee} = employeeReturn

            if (position === 'Engineer') {
                const engineer = new Engineer(name, id, email, github)

                teamMembers.push(engineer)
            } else if (position === 'Intern') {
                const intern = new Intern(name, id, email, school)

                teamMembers.push(intern)
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