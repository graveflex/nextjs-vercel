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
        name: 'app_name',
        message: 'Which app does this component belong to?',
        choices: ['packages/ui', 'apps/web/src']
      },
      {
        type: 'select',
        name: 'path',
        message: 'Where should this component be created?',
        choices: ['components', 'fields', 'providers']
      },
      {
	        type: 'confirm',
        name: 'isPayloadBlock',
        message: 'Is this component going to be used as a Payload block?'

	}
    ];

    return inquirer.prompt(questions);
  }
};
