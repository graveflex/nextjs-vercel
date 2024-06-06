module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message:
          'What is the class cased name of this component? (i.e. "LoadingSpinner")'
      },
      {
        type: 'select',
        name: 'path',
        message: 'Where should this component be created?',
        choices: ['components', 'fields', 'providers']
      }
    ];

    return inquirer.prompt(questions);
  }
};
