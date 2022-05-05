const inquirer = require('inquirer')

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'email',
            message: 'Please enter email'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter GitHub'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter school'
        }
    ])
}

module.exports = promptManager