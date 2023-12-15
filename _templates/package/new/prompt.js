module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the package?'
      },
      {
        type: 'select',
        name: 'ts_base',
        message: 'What is the `tsconfig.json` base this package uses?',
        choices: ['base', 'nextjs', 'react-library']
      }
    ];

    return inquirer.prompt(questions);
  }
};
