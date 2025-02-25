// const { reduce, uniq, compact } = require('lodash');

// prompt: ({ inquirer }) => {
//   const questions = ;

//   return inquirer.prompt(questions);
// }
module.exports = [
  {
    type: 'input',
    name: 'name',
    message:
      'What is the class cased name of this block? (i.e. "LoadingSpinnerBlock")'
  },
  {
    type: 'select',
    name: 'app_name',
    message: 'Which directory does this component belong to?',
    choices: ['apps/web/src']
  },
  {
    type: 'input',
    name: 'variants',
    message: 'How many variants of this block would you like to create?'
  },
  {
    type: 'input',
    name: 'pro_block_source_dir',
    message:
      'What is the source directory of the pro block components? (i.e. "~/Users/<USER_NAME>/Desktop/pro-blocks/components")'
  },
  {
    type: 'input',
    name: 'pro_block_name',
    message:
      'What is the singular name of the pro block? (i.e. "blog-sections" would be "blog-section")'
  }
];
