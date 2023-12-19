module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message:
          'What is the class cased name of this Payload collection? (i.e. "Page")'
      }
    ];

    return inquirer.prompt(questions);
  }
};

