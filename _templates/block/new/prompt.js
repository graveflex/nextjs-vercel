module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message:
          'What is the class cased name of this block? (i.e. "LoadingSpinner")'
      },
      {
        type: 'select',
        name: 'app_name',
        message: 'Which directory does this component belong to?',
        choices: ['apps/web/src']
      }
    ];

    return inquirer.prompt(questions);
  }
};
