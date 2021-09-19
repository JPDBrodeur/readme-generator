// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required):',
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
        message: 'Please provide an email address for user outreach:'
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project? (Required)',
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
        message: 'Provide a project description (Required):',
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
        message: 'Step-by-step instructions for installation (Required):',
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
        message: 'Enter usage information and examples (Required):',
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
        message: 'Select a license (Required):',
        choices: ['agpl-3.0', 'gpl-3.0', 'lgpl-3.0', 'mpl-2.0', 'apache-2.0', 'mit', 'bsl-1.0', 'unlicense', 'Show Me More'],
        default: 'mit',
        validate: licenseSelection => {
            if (licenseSelection) {
              return true;
            } else {
              console.log('Please choose a license!');
              return false;
            }
        }
    },
    {
        type: 'list',
        name: 'additionalLicenses',
        message: 'Select a license (Required):',
        choices: ['afl-3.0', 'artistic-2.0', 'bsd-2-clause', 'bsd-3-clause', 'bsd-3-clause-clear', 'cc', 'cc0-1.0', 'cc-by-4.0', 'cc-by-sa-4.0', 'wtfpl', 'ecl-2.0', 'epl-1.0', 'epl-2.0', 'eupl-1.1', 'gpl', 'gpl-2.0', 'lgpl', 'lgpl-2.1', 'isc', 'lppl-1.3c', 'ms-pl', 'osl-3.0', 'postgresql', 'ofl-1.1', 'ncsa', 'zlib'],
        validate: licenseSelection2 => {
            if (licenseSelection2) {
              return true;
            } else {
              console.log('Please enter usage information!');
              return false;
            }
        },
        when: ({license}) => {
            if (license === 'Show Me More') {
              return true;
            } else {
              return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter guidelines for how other developers might contribute:'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please include any test instructions here:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
