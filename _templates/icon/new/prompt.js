module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message:
          'What is the name of the Icon? (i.e. "ArrowLeft")'
      },
      {
        type: 'select',
        name: 'icon_group',
        message: 'Which icon group does this icon belong to?',
        choices: ['core']
      }
    ];

    return inquirer.prompt(questions);
  }
};
