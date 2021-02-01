# Chores App Project

================

---

Created by JC , LUIS , RAQUEL

https://github.com/pegasus-1982/Project2-Chores/tree/JC

# Table of contents

---

1. [Instruction](#Instruction)
2. [Getting Started](#Getting_Started)
3. [Tables](#Tables)
4. [INSERT INTO VALUES](#INSERT_INTO_VALUES)

## Description

:bulb:

---

General information about this project.

This application that can be used to write, save, and delete notes.
This application use an express backend and save and retrieve note data from a JSON file.

## Instruction <a name="Instruction"></a>

- Whenever a End-User submits a Name and Chore, The app will display the Name and Chore on the Summary page. -- waiting to be Compltetd by the Any User Input.

- Each Name and Chore in the Summary page also has a `Complete!` button. When the End-User clicks it, the Chore will be completed and the Fasle statment will turn to True for cleaned and completed.

- The app will store every Name and Chore in a database, whether completed or not.

## Getting Started <a name="Getting_Started"></a>

## Instructions/Getting Started

#### App Setup

#### Directory structure

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
	id int NOT NULL AUTO_INCREMENT,
	chore varchar(255) NOT NULL,
	completed BOOLEAN DEFAULT false,
	points int 10,
	PRIMARY KEY (id)
    
```
### INSERT INTO VALUES <a name="INSERT_INTO_VALUES"></a>
```
INSERT INTO chores

```


## License :cop: :guardsman:

:key:

---

This proyect going to used this license:

```
ISC
```

You can read more about this in
A list of the most common permissive licenses are MIT, Apache 2.0, ISC, and BSD.technologies used in projects

| License Identifier | FSF Free? | OSI Approved? |
| :----------------- | :-------: | ------------: |
| MIT                |     Y     |             Y |
| Apache_2.0         |     Y     |             Y |
| ISC                |     Y     |             Y |
| BSD                |           |             Y |
| GNU GPLv3          |     Y     |             Y |

- [MIT](https://spdx.org/licenses/MIT.html)
- [Apache_2.0 ](https://spdx.org/licenses/Apache-2.0.html)
- [ISC](https://spdx.org/licenses/ISC.html)
- [BSD](https://spdx.org/licenses/BSD-1-Clause.html)
- [GNU GPLv3] (https://spdx.org/licenses/GPL-3.0-only.html

> Maybe you want to search more of this part.
> This is how you do it.SPDX License List
> The SPDX License List itself is a list of commonly found licenses and
> exceptions used in free and open or collaborative software, data, hardware,
> or documentation. The SPDX License List includes a standardized short identifier,
> the full name, the license text, and a canonical
> permanent URL for each license and exception.
> [SPDX License List](https://spdx.org/licenses/)

## Usage

:speech_balloon: :hammer: :eyeglasses:

---

We are going to create this code to show, help and Learn and experiment

## Installation

:feet:

---

Small description step by step that tells how to run and develop the aplication
Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```
 npm install
 npm i express
 npm init
 node server.js
```

## Running Locally

Your app should now be running on [localhost:3000](http://localhost:4000/).

## Deploying to Heroku

```
sudo snap install heroku --classic
heroku login

git remote -v
heroku create
git push heroku main
heroku open
```

You can fine the app runing in Heroku

[![Deploy App in Heroku](https://shrouded-lake-16170.herokuapp.com/)](https://shrouded-lake-16170.herokuapp.com/)

## Tests

:eyes:

---

Demo aplication

Demo running

![demo](https://github.com/rakeru2006/express_heroku/blob/main/note.png)

## Contributing

:man_with_gua_pi_mao:

---

You can participate with this project with one of the followin examples:
Report a bug,Fix errors,Suggest a new feature,add features,Help improve the project,Other

## Questions FAQs

:question:

---

For questions contact
