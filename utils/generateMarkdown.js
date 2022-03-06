// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'agpl') {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (license === 'mit') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === 'apache') {
    return`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'agpl') {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (license === 'mit') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === 'apache') {
    return`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else {
    return ' ';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
  return `
  The application is covered under the following license:
  ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }
 }

 //conirm contributers
 function renderContributingSection(confContribute, data) {
  if (!confContribute) {
    return `
  Thank you for your interest, but contributions are no longer being accepted.
    `;
  } else {
    return `
  ${data}
    `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  
  ## Table-of-Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)
  
  ${data.function1}
  
  ${data.objective1}
  
  ## [Installation](#table-of-contents)
  
  ${data.installation}
  
  ## [Usage](#table-of-contents)
  
  ${data.usage}

  ## [License](#table-of-contents)
  
  ${ renderLicenseSection(data.license) }
  
  ## [Contributions](#table-of-contents)
  
  ${renderContributingSection(data.confContribute, data.contribute)}
  
  ## [Tests](#table-of-contents)
  
  ${data.test}
  
  ## [Questions](#table-of-contents)
  
  Please contact me using the following links:
  
  [GitHub](https://github.com/${data.githubName})
  
  [Email: ${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
