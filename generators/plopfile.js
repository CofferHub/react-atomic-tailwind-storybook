module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your atom component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/atoms/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/atoms/{{pascalCase name}}/styles.css',
        templateFile: 'templates/styles.css.hbs'
      },
      {
        type: 'add',
        path: '../src/components/atoms/{{pascalCase name}}/index.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/atoms/{{pascalCase name}}/index.test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  })
}
