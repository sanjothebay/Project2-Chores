# Chores App Project

---

Created by JC , LUIS , RAQUEL

https://github.com/pegasus-1982/Project2-Chores/tree/JC

![image](https://user-images.githubusercontent.com/67298961/106533785-5ce1e400-64b8-11eb-9e8d-0aa781c02bc0.png)

# Table of contents

---

1. [Instruction](#Instruction)
2. [Getting Started](#Getting_Started)
2. [App Setup](#App_Setup)
3. [Directory structure](#Directory_structure)
3. [Tables](#Tables)
4. [INSERT INTO VALUES](#INSERT_INTO_VALUES)
5. [Submission Video](#Submission_Video)


## Description :bulb:

---

General information about this project.

The application can be used to keep track of chores and who completed the chore. 
This application uses Sequelize as a backend and save and retrieve the Name and Chore data.

![image](https://user-images.githubusercontent.com/67298961/106533883-8995fb80-64b8-11eb-90e8-7fdda73d4629.png)


## Instruction <a name="Instruction"></a>

- Whenever a End-User submits a Name and Chore, The app will display the Name and Chore on the Summary page. -- waiting to be Compltetd by the Any User Input.

- Each Name and Chore in the Summary page also has a `Complete!` button. When the End-User clicks it, the Chore will be completed and the Fasle statment will turn to True for cleaned and completed.

- The app will store every Name and Chore in a database, whether completed or not.

## Getting Started <a name="Getting_Started"></a>

## Instructions/Getting Started

## Application Requirements

* Must use a Node and Express server

* Must use Handlebars.js as the template engine

* Must be backed by a MySQL database with a Sequelize ORM

* Must utilize both GET and POST routes for retrieving and adding new data

* Must be deployed using Heroku (with data)

* Must utilize at least one new library, package, or technology that we haven’t discussed

* Must have a polished front end/UI

* Must have a folder structure that meets the MVC paradigm

* Must meet good quality coding standards (indentation, scoping, naming)

* Must protect API keys in Node with environment variables

#### App Setup
## App Setup <a name="App_Setup"></a>

config Folder was created by running sequelize init:config and adds a config.json file.. (sequelize cli)

models Folder was created by running sequelize init:models and adds a index.js file.. (sequelize cli)

running npm init from the command line.
npm install express-handlebars

The application will be invoked by using the following command:

```
node server.js  To run the App
npm run test To run t he tests 
```

#### Directory structure
Directory structure <a name="Directory_structure"></a>

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   └── config.js
│  
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   ├── chores.js
│   ├── index.js
│   └── users.js
│
│ 
├── node_modules
│ 
├── package.json
│
├── public
│       └── css
│       │    └── inputstyles.css
│       │    └── style.css
│       │    └── summarystyles.css
│       └── img
│       └──js
│          └── chores.js
│          └── completed.js
│          └── user.js
│
├─── routes
│    ├── chores-api-routes.js
│    ├── html-routes.js
│    └── users-api-routes.js
│
│
│── views
│   └── layouts
│   │  └── main.handlebars
│   └── partials
│   │     └──chores
│   │        └── chore-chore.handlebars
│   ├── home.handlebars
│   ├── index.handlebars
│   └── inputForm.handlebars
│
├── .gitgnore
│
└── server.js
```

### Tables <a name="Tables"></a>
```
users
choresAndUsers
chores
    
```
### INSERT INTO VALUES <a name="INSERT_INTO_VALUES"></a>

```
INSERT INTO users
INSERT INTO choresAndUsers
INSERT INTO chores
```

![image](https://user-images.githubusercontent.com/67298961/106613946-627b1080-6530-11eb-940a-11c13f1e98f4.png)


## Submission Video <a name="Submission_Video"></a>

![4waoe8](https://user-images.githubusercontent.com/67298961/106538666-37f26e80-64c2-11eb-9c7e-6276b8d87770.gif)

