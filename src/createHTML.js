const fs = require('fs');
const data = require('../index');
const Employee = require('../lib/Employee');

function createHTML(data) {
// function to generate html based on prompt answers
  const cardArray = [];
  // empty array to add new employee cards 

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();
    let card = '';
    // series of if/else statements based on prompts to store new employees in based on answers
    if (role === 'manager') {
      // manager card
      card = `
        <div class="card employee-card">
          <div class="card-header">
            <h2 class="card-title">${employee.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${role}</h3>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">ID: ${employee.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
              <li class="list-group-item">Office number: ${employee.getOfficeNumber()}</li>
            </ul>
          </div>
        </div>
      `;
    } else if (role === 'engineer') {
      // engineer card
      card = `
        <div class="card employee-card">
          <div class="card-header">
            <h2 class="card-title">${employee.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${role}</h3>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">ID: ${employee.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
              <li class="list-group-item">GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></li>
            </ul>
          </div>
        </div>
      `;
    } else if (role === 'intern') {
      // intern card
      card = `
        <div class="card employee-card">
          <div class="card-header">
            <h2 class="card-title">${employee.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${role}</h3>
          </div>
          <div class="card-body">
            <ul class="list-group">
              <li class="list-group-item">ID: ${employee.getId()}</li>
              <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
              <li class="list-group-item">School: ${employee.getSchool()}</li>
            </ul>
          </div>
        </div>
      `;
    }
    cardArray.push(card);
  }

  // html content
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
      <link rel="stylesheet" href="style.css">
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>
  <body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 p-5 mb-3 team-heading">
                <h1 class="text-center">The Dream Team</h1>
            </div>
        </div>
        <div class="row justify-content-center">
            ${cardArray.join('')}
        </div>
    </div>
  </body>
  </html>
`;

return html;
// returns html

}

module.exports = createHTML;