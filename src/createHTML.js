const fs = require('fs');
const data = require('../index');
const Employee = require('../lib/Employee');

function createHTML(data) {

  const cardArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();
    let card = '';
    if (role === 'Manager') {
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
    } else if (role === 'Engineer') {
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
    } else if (role === 'Intern') {
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

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11
  `
    
}

module.exports = createHTML;