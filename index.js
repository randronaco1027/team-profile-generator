const fs = require('fs')
const inquirer = require('inquirer')
const generateHtml = require('./utils/generate-html')
const promptEngineer = require('./lib/Engineer.js')
const promptIntern = require('./lib/Intern.js')
const promptManager = require('./lib/Manager.js')

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

promptManager()
// .then(promptNextEmployee)
.then(promptIntern)
.then(promptEngineer)
.then(data => {
    console.log(data)
    const generateContent = generateHtml(data)
    fs.writeFileSync('./README.md', generateContent)
})