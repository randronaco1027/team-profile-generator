const generateHtml = function(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        <link rel="stylesheet" href="./style.css">
        <title>Team Generator</title>
    </head>
    
    <body>
        <header class="mb-3">
            <h1 class="text-center bg-primary p-3 text-white">My Team</h1>
        </header>
        <div class="mt-4">
            <div class="d-flex">
                
            </div>
        </div>
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </body>
    
    </html>`
}

const generateManager = function(mgrData) {
    return `
    <div class="card m-2">
        <h4 class="m-0 card-panel grey lighten-1 p-3">${mgrData.name}</h4>
        <div class="card-body">
            <p>ID: ${mgrData.id}</p>
            <p>Email: <span><a href="#">${mgrData.email}</a></span></p>
            <p>Office Number: ${mgrData.office}</p>
        </div>
    </div>
    `
}

const generateEngineer = function(engineerData) {
    return `
    <div class="card m-2">
        <h4 class="m-0 card-panel grey lighten-1 p-3">${engineerData.name}</h4>
        <div class="card-body">
            <p>ID: ${engineerData.id}</p>
            <p>Email: <span><a href="#">${engineerData.email}</a></span></p>
            <p>Office Number: ${engineerData.office}</p>
        </div>
    </div>
    `
}

const generateIntern = function (internData) {
    return `
    <div class="card m-2">
        <h4 class="m-0 card-panel grey lighten-1 p-3">${internData.name}</h4>
        <div class="card-body">
            <p>ID: ${internData.id}</p>
            <p>Email: <span><a href="#">${internData.email}</a></span></p>
            <p>Office Number: ${internData.office}</p>
        </div>
    </div>
    `
}

module.exports = generateHtml