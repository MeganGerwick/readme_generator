// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.Title}
    ## Description
    ${data.Description}
    ## Table of Contents

    ## Installation

    ## Usage

    ## License

    ## Contributing

    ## Tests

    ## Questions
    If you have questions about this repository, contact ${data.Username} at ${data.Email}.
    ${data.Title}
    //add rest of document 
`;

}

module.exports = generateMarkdown;
