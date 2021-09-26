// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
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
        choices: ['AGPL v3', 'Apache 2.0', 'Artistic 2.0', 'BSD 2-Clause', 'BSD 3-Clause', 'CC BY 4.0', 'CC BY-SA 4.0', 'CC0-1.0', 'EPL 1.0', 'GPL v2', 'GPL v3', 'ISC', 'LGPL v3', 'MIT', 'MPL 2.0', 'OFL 1.1', 'Unlicense', 'WTFPL', 'Zlib'],
        default: 'MIT',
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
    },
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
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const { github, email, title, description, installation, usage, license, contributing, test } = data;
    let link = '';
    switch (license) {
        case 'AGPL v3':
            link = 'https://choosealicense.com/licenses/agpl-3.0/';
            break;
        case 'Apache 2.0':
            link = 'https://choosealicense.com/licenses/apache-2.0/';
            break;
        case 'Artistic 2.0':
            link = 'https://choosealicense.com/licenses/artistic-2.0/';
            break;
        case 'BSD 2-Clause':
            link = 'https://choosealicense.com/licenses/bsd-2-clause/';
            break;
        case 'BSD 3-Clause':
            link = 'https://choosealicense.com/licenses/bsd-3-clause/';
            break;
        case 'CC BY 4.0':
            link = 'https://choosealicense.com/licenses/cc-by-4.0/';
            break;
        case 'CC BY-SA 4.0':
            link = 'https://choosealicense.com/licenses/cc-by-sa-4.0/';
            break;
        case 'CC0-1.0':
            link = 'https://choosealicense.com/licenses/cc0-1.0/';
            break;
        case 'EPL 1.0':
            link = 'https://choosealicense.com/licenses/epl-1.0/';
            break;
        case 'GPL v2':
            link = 'https://choosealicense.com/licenses/gpl-2.0/';
            break;
        case 'GPL v3':
            link = 'https://choosealicense.com/licenses/gpl-3.0/';
            break;
        case 'ISC':
            link = 'https://choosealicense.com/licenses/isc/';
            break;
        case 'LGPL v3':
            link = 'https://choosealicense.com/licenses/lgpl-3.0/';
            break;
        case 'MIT':
            link = 'https://choosealicense.com/licenses/mit/';
            break;
        case 'MPL 2.0':
            link = 'https://choosealicense.com/licenses/mpl-2.0/';
            break;
        case 'OFL 1.1':
            link = 'https://choosealicense.com/licenses/ofl-1.1/';
            break;
        case 'Unlicense':
            link = 'https://choosealicense.com/licenses/unlicense/';
            break;
        case 'WTFPL':
            link = 'https://choosealicense.com/licenses/wtfpl/';
            break;
        case 'Zlib':
            link = 'https://choosealicense.com/licenses/zlib/';
            break;
            
      };
    const readmeContent = `
[![License: ${license}](https://img.shields.io/badge/License-${license}-brightgreen)](${link})

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

Distributed under the [${license} License](${link}).


## Contributing

${contributing}


## Tests

${test}


## Questions

* GitHub Profile: [${github}](https://github.com/${github})

* Have any additional questions? You can reach me by email at [${email}](mailto:${email}).
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