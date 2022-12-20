// create manager card
const managerHTML = (manager) => `
<div class="w-48 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <div class="bg-blue-500 text-center text-white text-xl">
            <h2>${manager.name}</h2>
            <h3>manager</h3>
          </div>
          <div class="text-black p-4">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="offficeNumber">Office Number: ${manager.officeNumber}</p>
          </div>
</div>`;

// create engineer card
const engineerHTML = (engineer) => `
<div class="w-48 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <div class="bg-blue-500 text-center text-white text-xl">
            <h2>${engineer.name}</h2>
            <h3>Engineer</h3>
          </div>
          <div class="text-black p-4">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
          </div>
</div>`;

// create intern card
const internHTML = (intern) => `
<div class="w-48 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <div class="bg-blue-500 text-center text-white text-xl">
            <h2>${intern.name}</h2>
            <h3>Intern</h3>
          </div>
          <div class="text-black p-4">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
          </div>
</div>`;

// generate html page
const htmlPage = (employee) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.tailwindcss.com"></script>
    <title>My Member</title>
  </head>
  <body>
    <header class="container text-2xl text-white bg-red-500">
      <div class="flex flex-row justify-center p-8">
        <p>My Team</p>
      </div>
    </header>

    <main class="container">
      <div class="flex flex-wrap justify-center my-5 space-x-4">
        ${employee}
      </div>
    </main>
  </body>
</html>
`;
