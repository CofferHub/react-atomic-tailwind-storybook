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

This is the project's sctructure, here you can see the most important directories like:  
* Atoms: in this section you can find isolate elements, like tags(buttons, inputs and checkbox);  
* Molecules: in this section you will find the combination of elements inside of another element, like( cards and headers);  
* Organisms: this section contain the combination of all previously elements.
	
## Technologies
Project is created with:
* Lorem version: 12.3
* Ipsum version: 2.33
* Ament library version: 999
	
## Setup
To run this project, install it locally using npm:

```
$ cd ../lorem
$ npm install
$ npm start
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
