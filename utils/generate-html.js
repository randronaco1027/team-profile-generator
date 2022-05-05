function generateHtml(data) {
    return `# ${data.email} , ${data.github} , ${data.school}
# ${data.employees[0].name} , ${data.employees[0].github} , ${data.employees[0].email}
# ${data.employees[1].name} , ${data.employees[1].github} , ${data.employees[1].email}
    `
}
module.exports = generateHtml