// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username:',
        validate: githubInput => {
            if (githubInput) {
            return true;
            } else {
            console.log('Please enter your GitHub Username!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide an email address for user outreach:',
        validate: emailInput => {
            if (emailInput) {
            return true;
            } else {
            console.log('Please enter your email!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter a title for your project:',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter your title!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a project description:',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please enter a description!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Step-by-step instructions for installation:',
        validate: installInput => {
            if (installInput) {
              return true;
            } else {
              console.log('Please enter installation instructions!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information and examples:',
        validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('Please enter usage information!');
              return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license:',
        choices: ['afl_3.0', 'agpl-3.0', 'apache-2.0', 'artistic-2.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'bsl-1.0', 'cc', 'cc-by-4.0', 'cc-by-sa-4.0', 'cc0-1.0', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'gpl', 'gpl-2.0', 'gpl-3.0', 'isc', 'lgpl', 'lgpl-2.1', 'lgpl-3.0', 'lppl-1.3c', 'mit', 'mpl-2.0', 'ms-pl', 'ncsa', 'ofl-1.1', 'osl-3.0', 'postgresql', 'unlicense', 'wtfpl', 'zlib'],
        default: 'mit',
        validate: licenseSelection => {
            if (licenseSelection) {
              return true;
            } else {
              console.log('Please select a license!');
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines for how other developers might contribute:',
        validate: contributingInput => {
            if (contributingInput) {
            return true;
            } else {
            console.log('Please enter guidelines for contributing!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Include test instructions:',
        validate: testInput => {
            if (testInput) {
            return true;
            } else {
            console.log('Please enter your test instructions!');
            return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const { github, email, title, description, installation, usage, license, contributing, test } = data;
    // Optional Contributing section
    const readmeContent = `
![Github License](https://img.shields.io/badge/License-${license}-brightgreen)

# ${title}

## Description


${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation

${installation}


## Usage

${usage}


## License

Distributed under the ${license} License. See LICENSE for more information.


## Contributing

${contributing}


## Tests

${tests}


## Questions

* GitHub Username: [${github}](https://github.com/${github})

* Email Address: [${email}](mailto:${email})
    `

    fs.writeFile(fileName, readmeContent, err => {
        if (err) throw new Error(err);
  
        console.log('README created! Check out README.md file in the dist folder to see it!');
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
    .then(projectData => {
        writeToFile('./dist/README.md', projectData);
    });
