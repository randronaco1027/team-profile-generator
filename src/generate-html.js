// Creates Manager portion of HTML
const generateManager = function(mgrData) {
    return `
    <div class="card m-2">
        <div class="m-0 card-panel grey lighten-1 p-2">
            <h4>${mgrData.name}</h4>
            <h6>Manager  <span class="oi oi-person"></h6>
        </div>
        <div class="card-body">
            <p>ID: ${mgrData.id}</p>
            <p>Email: <span><a href="mailto:${mgrData.email}">${mgrData.email}</a></span></p>
            <p>Office Number: ${mgrData.officeNumber}</p>
        </div>
    </div>
    `
}

// Creates Engineer portion of HTML
const generateEngineer = function(engineerData) {
    return `
    <div class="card m-2">
        <div class="m-0 card-panel grey lighten-1 p-2">
            <h4>${engineerData.name}</h4>
            <h6>Engineer <span class="oi oi-wrench"></h6>
        </div>
        <div class="card-body">
            <p>ID: ${engineerData.id}</p>
            <p>Email: <span><a href="mailto:${engineerData.email}">${engineerData.email}</a></span></p>
            <p>GitHub: <span><a href="https://github.com/${engineerData.github}">${engineerData.github}</a></span></p>
        </div>
    </div>
    `
}

// Creates Intern portion of HTML
const generateIntern = function (internData) {
    return `
    <div class="card m-2">
        <div class="m-0 card-panel grey lighten-1 p-2">
            <h4>${internData.name}</h4>
            <h6>Intern <span class="oi oi-book"></h6>
        </div>
        <div class="card-body">
            <p>ID: ${internData.id}</p>
            <p>Email: <span><a href="mailto:${internData.email}">${internData.email}</a></span></p>
            <p>School: ${internData.school}</p>
        </div>
    </div>
    `
}

// Creates array of all team members to be added to HTML
const generateTeamPage = function(teamData) {
    const teamArr = []
    
    for (var i = 0; i < teamData.length; i++) {
        if (teamData[i].getRole() === 'Engineer') {
            teamArr.push(generateEngineer(teamData[i]))
        } else if (teamData[i].getRole() === 'Intern') {
            teamArr.push(generateIntern(teamData[i]))
        } else if (teamData[i].getRole() === 'Manager') {
            teamArr.push(generateManager(teamData[i]))
        }
    }
    return teamArr
}

// Creates full HTML with team members
const generateHtml = (teamData) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="./style.css">
        <title>Team Generator</title>
    </head>
    
    <body>
        <header class="mb-3">
            <h1 class="text-center bg-primary p-3 text-white">My Team</h1>
        </header>
        <div class="mt-4 d-flex text-white">
            ${generateTeamPage(teamData)}
        </div>
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </body>
    
    </html>`
}
module.exports = generateHtml