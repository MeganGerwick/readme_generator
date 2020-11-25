// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.Title}
    ## Description
    ${data.Description}

    ## Table of Contents
    [Installation](https://github.com/${data.Username}/${data.Title}#installation)
    [Usage](https://github.com/${data.Username}/${data.Title}#usage)
    [Contributing](https://github.com/${data.Username}/${data.Title}#contributing)
    [Questions](https://github.com/${data.Username}/${data.Title}#questions)
    
    ## Installation
    To install the necessary dependencies for this project, use the command ${data.Install}.
    
    ## Usage
    ${data.Usage}

    ## Contributing
    ${data.Contribute}

    ## Questions
    If you have questions about this repository, contact ${data.Username} at https://github.com/${data.Username}
    or email at ${data.Email}.
`;
}

module.exports = generateMarkdown;
