function generateHtml(data) {
    return `
        ${data[0].name}   
        ${data[1].name} 
        ${data[2].name}  
    `
}
module.exports = generateHtml