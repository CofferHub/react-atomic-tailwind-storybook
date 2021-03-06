![Header image](https://i.ibb.co/t3jDLfx/frame1.png)

---

## Table of contents

* [Introduction](#introduction)
* [Ilustrations](#ilustrations)
* [Structure](#structure)
* [Technologies](#technologies)
* [Setup](#setup)
* [Learn More](#learn-more)

## Introduction

This is a storybook components library based on Tailwind. The main idea of this repo is to be a custom components backup idealize to be short and simple and integrate with your react app.
We based the design structure in Atomic Design, which has an more condensed way to organize components. But we are not here to explain what Atomic Design is, but how it can improve the way you work with components.

## Ilustrations

This is where comes the illustrations

## Contributing

Do you want to contribute with us?
Check this rules how to help us :)

- [How to Contribute?](https://github.com/CofferHub/react-atomic-tailwind-storybook/blob/master/docs/contributing.md)

## Structure
```
├── .storybook
├── docs
│   ├── contributing.md
│   ├── issue_templates.md
│   └── pull_requeste_template.md
├── public
├── src
│   ├── assets
│   │   ├── img
│   │   └──svg
│   ├── components
│   │   ├── atoms
│   │   │   ├── Button
│   │   │   ├── Checkbox
│   │   │   ├── Input
│   │   │   └── Text
│   │   ├── documentation
│   │   ├── molecules
│   │   │   ├── Card
│   │   │   └── Header
│   │   ├── organisms
│   │   │   └── PageStatic
│   │   └── templates
│   └── util
```

This is the project's structure, here you can see the most important directories like:  
* Atoms: in this section you can find isolate elements, like tags(buttons, inputs and checkbox);  
* Molecules: in this section you will find the combination of elements inside of another element, like( cards and headers);  
* Organisms: this section contain the combination of all previously elements.

You also will find the documentation necessary to colaborate with this project.
	
## Technologies
Project is created with:
* [React](https://pt-br.reactjs.org/) version: 16.13
* [ReactDOM](https://pt-br.reactjs.org/docs/react-dom.html) version: 16.13
* [Tailwind CSS](https://tailwindcss.com/) version: 1.7
* [Storybook](https://storybook.js.org/) version: 6.0
* [Babel](https://babeljs.io/) version: 8.1
* [TypeScript](https://www.typescriptlang.org/) version: 3.7
	
## Setup
To run this project, install it locally using YARN:

```
$ yarn install or yarn
$ yarn storybook
```

or NPM:

```
$ npm install or npm i
$ npm run storybook
```

## Learn More

You can learn more in the [Our wiki project progress](https://github.com/Dheyson/react-atomic-tailwind-storybook/wiki/How-did-we-get-here%3F).
