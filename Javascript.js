import inquirer from 'inquirer';
import fs from 'fs/promises';

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None']
    },
    {
        type: 'input',
        name: 'author',
        message: 'Who is the author of the project?'
    },
    {
        type: 'input',
        name: 'dateStarted',
        message: 'What is the start date of the project? (format: YYYY-MM-DD)'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email for contact and questions?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    }
];

function generateReadme(answers) {
    return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Author](#author)
- [Start Date](#start-date)
- [Questions](#questions)

## Installation
${answers.installation || ''}

## Usage
${answers.usage || ''}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing || ''}

## Tests
${answers.tests || ''}

## Author
${answers.author}

## Start Date
${answers.dateStarted}

## Questions
For any questions, please contact me at [${answers.email}](mailto:${answers.email}).
Visit my GitHub profile: [${answers.github}](https://github.com/${answers.github})

`;
}

inquirer.prompt(questions).then(answers => {
    const readmeContent = generateReadme(answers);
    fs.writeFile('README.md', readmeContent)
        .then(() => console.log('README.md generated successfully!'))
        .catch(err => console.error(err));
});