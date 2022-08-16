// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'none'){
    return "" 
  }else { 
    return`![License:${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`
    }
  }
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'none'){
    return "" 
  }else { 
    return `[license:${license}](https://opensource.org/licenses/${license})`
    
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'none'){
    return "" 
  }else { 
    return  `### license
    ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# title
  ${data.title}

 ${renderLicenseBadge(data.license)}
 
## Discription 
${data.discription}

## usage
${data.usage}

#### Installation
${data.installation}

#### conrtibution
${data.conrtibution}

### email
${data.email}

### github
${data.github}


${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;