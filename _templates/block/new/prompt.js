const { reduce, uniq, compact } = require('lodash');

const typeMappings = {
  richText: {
    componentImportPath:
      "import RichText from '@mono/ui/components/primitives/RichText';",
    mockImportPath: `import genRichText from '@mono/ui/utils/genRichText';`,
    render: (fieldName) => `<RichText {...${fieldName}}/>`,
    type: 'richText',
    mock: `{...genRichText([
              {
                type: 'paragraph',
                text: faker.lorem.paragraph()
              }
            ])
          }`
  },
  text: {
    render: (fieldName) => `<p>{${fieldName}}</p>`,
    type: 'text',
    mock: `faker.lorem.words(5)`
  },
  image: {
    componentImportPath:
      "import ResponsivePayloadImage from '@mono/ui/components/primitives/ResponsivePayloadImage';",
    render: (fieldName) => `<ResponsivePayloadImage image={${fieldName}}/>`,
    type: 'upload',
    relationTo: 'images',
    mock: `faker.image.imageUrl()`
  },
  video: {
    componentImportPath: "import Video from '@mono/ui/components/Video';",
    render: (fieldName) => `<Video video={${fieldName}}/>`,
    type: 'upload',
    relationTo: 'videos',
    mock: `faker.internet.url()`
  },
  checkbox: {
    type: 'checkbox',
    mock: `false`
  },
  array: {
    type: 'array',
    mock: `[]`
  }
};

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
      },
      {
        type: 'input',
        name: 'fields',
        message:
          'Payload field names? Separate by commas. (i.e. "title, description, image")'
      }
    ];

    return inquirer.prompt(questions).then((answers) => {
      const { fields: promptFields } = answers;
      const questions = promptFields
        .split(',')
        .map((f) => f.trim())
        .filter((f) => f)
        .map((f) => {
          return {
            type: 'select',
            name: `${f}`,
            message: `What type of field is ${f}?`,
            choices: Object.keys(typeMappings)
          };
        });

      return inquirer.prompt(questions).then((nextAnswers) => {
        let typeImportPaths = [];
        let componentImportPaths = [];
        let mockImportPaths = [];
        let schemaImportPaths = [];
        const defaultRenderFn = (fieldName) => `<p>{${fieldName}}</p>`;
        const fields = reduce(
          nextAnswers,
          (memo, val, key) => {
            const renderFn = typeMappings[val].render || defaultRenderFn;
            memo.push({
              fieldName: key,
              fieldType: typeMappings[val].type,
              fieldRelation: typeMappings[val].relationTo,
              rendered: renderFn(key),
              mock: typeMappings[val].mock
            });
            componentImportPaths.push(typeMappings[val].componentImportPath);
            mockImportPaths.push(typeMappings[val].mockImportPath);
            return memo;
          },
          []
        );

        typeImportPaths = uniq(compact(typeImportPaths));
        componentImportPaths = uniq(compact(componentImportPaths));
        mockImportPaths = uniq(compact(mockImportPaths));
        schemaImportPaths = uniq(compact(schemaImportPaths));

        const retVal = {
          ...answers,
          fields,
          typeImportPaths,
          componentImportPaths,
          mockImportPaths,
          schemaImportPaths
        };
        return retVal;
      });
    });
  }
};
