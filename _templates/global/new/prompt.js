module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message:
          'What is the class cased name of this Payload global? (i.e. "Navigation")'
      }
    ];

    return inquirer.prompt(questions);
  }
};

