// function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.title}
    ![Image of the project](./images/README_Screenshot.png)
    ## Description
    ${data.description}
    
    ## Table of Contents
    [Description](#Description)
    [Installation](#Installation)
    [Usage](#Usage)
    [License](#License)
    [Contributors](#Contributors)
    [Test](#Test)
    [Respository](#Repository)
    [Github Profile](#Github)
    
    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## Contributors
    ${data.contributing}

    ## Test 
    ${data.test}

    ## Questions
    Contact Info:
    GitHub: [https://github.com/${data.username}](https://github.com/${data.username})
    Email Address: [${data.email}](${data.email})
  `;
  }
  
  module.exports = generateMarkdown;