# nodejs-express-sequelize-mysql

# :sparkles: Project Title  Create Node  application   :sparkles:
================

## Author :bowtie:
***

Created by JC, Luis Raquel

What is Sequelize?

Sequelize is a promise-based ORM for Node.js. It supports PostgreSQL, MySQL, SQLite, and MSSQL, and delivers robust transaction features, table relationships, data loading and migration mechanisms, and more.



ORM

Object - Refers to the object (s) that we can use in our language.

Relational - Refers to our Database Management System (MySQL, MSSQL, PostgreSQL).

Mapping - Refers to the connection between the objects and the tables.



## Prerequisites
  :feet:
  ***

   ```
  MySQL Workbench
  Node.js
  JavaScript
  Express
  MySQL2
  Sequelize
  Postman
 ```
## References
 :feet:
 ***


 [sequelize](https://sequelize.org/v3/)




  Make sure you install [Node.js](http://nodejs.org/)


  ```
   npm install
   node -v
   npm -v

  ```



## Step1: Generate a package.json file
  :feet:
  ***
The first thing we are going to do is build a package.json


  ```
   npm init

  ```

This is an example how look our paket json
```
{
  "name": "nodejs-express-sequelize-mysql",
  "version": "1.0.0",
  "description": "Node.js Rest Apis with Express, Sequelize & MySQL.",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/rakeru2006/nodejs-express-sequelize-mysql.git"
  },
  "keywords": [
    "nodejs",
    "express",
    "rest",
    "api",
    "sequelize",
    "mysql"
  ],
  "author": "rake",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/rakeru2006/nodejs-express-sequelize-mysql/issues"
  },
  "homepage": "https://github.com/rakeru2006/nodejs-express-sequelize-mysql#readme",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "express-session": "^1.17.1",
    "mysql2": "^2.2.5",
    "passport": "^0.4.1",
    "passport-local": "^1.0.0",
    "sequelize": "^6.4.0"
  }
}
```

## Step 2: Install Dependencies
  :feet:
  ***

We need  install dependencies



```
npm install express sequelize mysql2  bcryptjs cors  express-session   passport  
```

In your project Add a file named .gitignore

```
node_modules
```

node_modules


## Step 3: Configure the application
  :feet:
  ***
Now, we create a server file. This will be the main file called when you type the following:

npm start
This runs the application. You can also run the application by typing node server.js.
```
node server.js
```
Now it is time to edit our server.js file in the root folder. In this file, we are going to create our Express application.


```
var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
require("./routes/html-routes.js")(app);
require("./routes/chores-api-routes")(app);
require("./routes/users-api-routes")(app);

// Import routes and give the server access to them.
/* var routes = require("./controllers/choreController.js");

app.use(routes); */

db.sequelize.sync({force: false}).then(function(){

  // Start our server so that it can begin listening to client requests.
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });

})



```

Instaling nodemon npm


```
npm i -D nodemon
```
## Step 4: Configure Sequelize with MySQL
  :feet:
  ***


## Step 4.1: Create MySQL Database
  :feet:
  ***

We create a db folder and the schema.sql file with the data from the "passport_demo" database


```
DROP DATABASE IF EXISTS passport_demo;
CREATE DATABASE passport_demo;
```
It is important to create the database that will be used on your server or computer.
we run the las commands in MySQL Workbench to CREATE DATABASE passport_demo;


We are going to make use of the Sequelize CLI package to start the project for us.
Let's start by installing the Sequelize CLI package.

```
npm install -g sequelize-cli

```
Installing Sequelize and mysql2


```
 npm i --save sequelize mysql2
```

## Step 4.2:  We initialize Sequelize
  :feet:
  ***

```
sequelize init

```
With this sequelize-cli created a base structure for us at the root of our project,
if you inspect your directory at this point, you will notice that this create tow directories,
create a new folder named models and create a new file named index.js in the models folder and
create a new folder named config and create a new file named config.json in the models folder.

Your directory structure should now look like this:


```
Project2-Chores/
 ├── config/
 │   └── config.json
 ├── migrations/
 ├── models/
 │   └── index.js
 ├── node_modules/
 ├── seeders/
 ├── server.js
 ├── package-lock.json
 └── package.json

```
Do not modify anything from the server / models / index.js file that was generated automatically
If we check the ./config/config.json file, we see that we have 3 options for connecting to a database,

This config.json file  will be used by Sequelize to manage different environments.
Be shure to  modify your   "password": and  "database": to match with your congiguration in MySQL Workbench

```
{
  "development": {
    "username": "root",
    "password": "password123",
    "database": "choresApp_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "password123",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "password123",
    "database": "passport_demo",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
we modify the option for you  “development”:


```
"development": {
    "username": "root",
    "password": "yourpasword",
    "database": "yournamedatabase",
    "host": "127.0.0.1",
    "dialect": "mysql",
    },

```
This will look like

```
{
  "development": {
      "username": DB_USER, // ← Name User in  DB
      "password": DB_PASS, // ← Password DB
      "database": DB_NAME, // ← Name DB to work
      "host": "127.0.0.1",
      "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "password123",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "password123",
    "database": "passport_demo",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```



## Step 4.3: Generating Models to create table
  :feet:
  ***




```

```
Now let's check the ./models/index.js file. This file has the function of creating a new instance of Sequelize each time it is called, and its default environment variable is “development”, which will use the database, host, user, password and options that we just added.



```
sequelize model:create --name useasdsaasdr --attributes "email:[type:string,unique:true,allowNull:false,{validate:{isEmail:true}}]",password:[type:STRING,allowNull:false]
```
Sequelize automatically created the file index.js inside of  /models, and look like this

```

'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

```
## Step 4.3: Create table user

Now in the drive  ./models we are going to add the information to create  a file call user.js to create the new  table user

In this case, within this file, the only thing that must be defined are the columns to be obtained from the table (* the id column is not necessary, it is implicit , since they will be available for reading and writing. Any existing column in the table and not referenced in the model will be ignored.


Yout user file can look like this user.js

```
module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
             allowNull: false,
            primaryKey: true,
        },
        user: {
            type: DataTypes.STRING,
        },
    })
    Users.associate = function(models) {
        Users.belongsToMany(models.Chores, {
            through: "choresAndUsers"
        })
    }
    return Users
};
```
## Step 4.4: Creat a thable chores
```
module.exports = function (sequelize, DataTypes) {
    var Chores = sequelize.define("Chores", {

        chore: {
            type: DataTypes.STRING,
        },
        points: {
            type: DataTypes.INTEGER,
            defaultValue: 10
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        userId: {
            type: DataTypes.INTEGER,
        },

    })
     Chores.associate = function(models) {
        Chores.belongsToMany(models.Users, {
            through: "choresAndUsers"
        })
    }
    return Chores
};
```

we have to require models in server.js file
```
var db = require("./models");
```

We test and Now run:

```
node server.js
```
You should see the table create in worbench . This means that our Sequelize models have been synced successfully, and if you check your database you should see a users table with the columns specified present.






Now run:

```
node server.js
```
You should see the table create in worbench . This means that our Sequelize models have been synced successfully, and if you check your database you should see a users table with the columns specified present.

## Step 5: Define Routes

We create a new file in a directory routes/html-routes.js  should look like this

```
// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html

  app.get("/", function (req, res) {
    res.render("home");
  });

  app.get("/input", function (req, res) {
    res.render("inputForm");
  });

  app.get("/summary", function (req, res) {
    db.Chores.findAll({ include: db.Users }).then(function (dataChores) {
      db.Users.findAll().then(function (dataUsers) {
        // console.log(dataChores)
        res.render("index", {
          users: dataUsers,
          chores: dataChores.map((dataChore) => ({
            ...dataChore,
            users: dataUsers,
          })),
        });
      });
    });
  });
};


```


We create tow routes more for users should look like this
routes/users-api-routes.js

```
// Requiring our models
var db = require("../models");

module.exports = function(app) {

   /*  // GET route for getting all of the posts
    app.get("/api/posts", function(req, res) {
      var query = {};
      if (req.query.author_id) {
        query.AuthorId = req.query.author_id;
      }
      // Here we add an "include" property to our options in our findAll query
      // We set the value to an array of the models we want to include in a left outer join
      // In this case, just db.Author
      db.Post.findAll({
        where: query,
        include: [db.Author]
      }).then(function(dbPost) {
        res.json(dbPost);
      });
    });

    // Get route for retrieving a single post
    app.get("/api/posts/:id", function(req, res) {
      // Here we add an "include" property to our options in our findOne query
      // We set the value to an array of the models we want to include in a left outer join
      // In this case, just db.Author
      db.Post.findOne({
        where: {
          id: req.params.id
        },
        include: [db.Author]
      }).then(function(dbPost) {
        res.json(dbPost);
      });
    });

    // POST route for saving a new post */
    app.post("/api/user", function(req, res) {
      db.Users.create(req.body).then(function(dbUser) {
        //console.log(req)
        res.json(dbUser);
      });
    });

    // DELETE route for deleting posts
    app.delete("/api/posts/:id", function(req, res) {
      db.Post.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbPost) {
        res.json(dbPost);
      });
    });

    // PUT route for updating posts
    app.put("/api/posts", function(req, res) {
      db.Post.update(
        req.body,
        {
          where: {
            id: req.body.id
          }
        }).then(function(dbPost) {
        res.json(dbPost);
      });
    });
  };

```

We create tow routes more for users should look like this
routes/chores-api-routes.js

```
// Requiring our models
var db = require("../models");

module.exports = function (app) {
  /*  // GET route for getting all of the posts
    app.get("/api/posts", function(req, res) {
      var query = {};
      if (req.query.author_id) {
        query.AuthorId = req.query.author_id;
      }
      // Here we add an "include" property to our options in our findAll query
      // We set the value to an array of the models we want to include in a left outer join
      // In this case, just db.Author
      db.Post.findAll({
        where: query,
        include: [db.Author]
      }).then(function(dbPost) {
        res.json(dbPost);
      });
    });

    // Get route for retrieving a single post
    app.get("/api/posts/:id", function(req, res) {
      // Here we add an "include" property to our options in our findOne query
      // We set the value to an array of the models we want to include in a left outer join
      // In this case, just db.Author
      db.Post.findOne({
        where: {
          id: req.params.id
        },
        include: [db.Author]
      }).then(function(dbPost) {
        res.json(dbPost);
      });
    });

    // POST route for saving a new post */
  app.post("/api/chore", function (req, res) {
    db.Chores.create(req.body).then(function (dbChore) {
      res.json(dbChore);
    });
  });

  // DELETE route for deleting posts
  // app.delete("/api/chore/:id", function(req, res) {
  //   db.Post.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbdelete) {
  //     res.json(dbdelete);
  //   });
  // });

  // PUT route for updating posts
  app.put("/api/chore/:id", function (req, res) {
    console.log("REQ BODY: ", req.body);
    console.log("REQ PARAMS: ", req.params);
    db.Chores.update(
      {
        userId: req.body.userId,
        completed: 1,
      },
      {

        where: {
          id: req.params.id,
        },
      }
    ).then(function (dbPut) {
      res.json(dbPut);
    });
  });
};

```
## Step 6: Creating views with handle bars


1. Create the file  Adding an Express-Handlebars page  in ./views/layouts should be your main.handlebars file.


```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">

		<link rel="stylesheet" href="/css/style.css" type="text/css" />
		<link rel="stylesheet" href="/css/inputstyles.css" type="text/css" />
		<link rel="stylesheet" href="/css/summarystyles.css" type="text/css" />
		<title>Chore App!</title>
		<script src="https://code.jquery.com/jquery.js"></script>

		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
		<script src="/js/chore.js"></script>
		<script src="/js/completed.js"></script>     
		<script src="/js/user.js"></script>

	</head>

	<div class="container-sm">

	<nav class="nav nav-pills nav-justified">
	<a class="nav-link" aria-current="page" href="/">Home</a>
	<a class="nav-link" href="/Input">Input Form</a>
	<a class="nav-link" href="/summary">Summary View</a>

	</nav>

	<body>
		{{{ body }}}
	</body>

	</div>

</html>

```
All our  handlebars files should go directly into the ./views directory


```

```





Nao we are going to create the vews with handle bars


UP LOAD TO HEROKU

## Part One: Creating a JawsDB Remote Database

1. On your local machine, navigate to your project folder. At this point, we'll assume you've been pushing/pulling your code with GitHub but have yet to deploy to Heroku.

2. Type in console

```
 heroku create


```
this will show

```
Creating app... done, ⬢ rocky-refuge-93631
https://rocky-refuge-93631.herokuapp.com/ | https://git.heroku.com/rocky-refuge-93631.git
```
Now change the value in work bench

Install JawsDB MySQL add-on on *rocky-refuge-93631* application in Heroku dashboard


git push heroku master
  That will create a Heroku app and set it up on Heroku.

3. Navigate to [Heroku](https://www.heroku.com) and login with your credentials.

4. Find your Heroku app's name in the dashboard. Click it.

5. Look for the Add-Ons section in your app's dashboard and type `JawsDB` in the input field. That should bring up the `JawsDB MySQL` add-on.

6. Click on `JawsDB MySQL` and that should bring up a modal asking you to provision a specific tier plan.

7. Make sure you select the free option, then click `Provision`

8. You'll know that Heroku set up your database when a `JawsDB` entry shows up under the Add-Ons section.

## Part Two: Hooking Your Sequelize Project with JawsDB

1. In your
```
Project2-Chores/
 ├── config/
 │   └── config.json

```
In your `config.json` file, add `"use_env_variable":JAWSDB_URL"` to your `production` connection, as shown in the highlighted portion of this screenshot.

```
"production": {
   "username": "root",
   "password": "Welcome1!",
   "database": "database_production",
   "host": "127.0.0.1",
   "use_env_variable": "JAWSDB_URL",
   "dialect": "mysql"
 }
```
We modify the values by

```

 "production": {
  "use_env_variable": "JAWSDB_URL",
  "dialect": "mysql"
}

```

and we modyfy the file model/index.js  to use development

```
const env = process.env.NODE_ENV || 'development';
```

2. Notice how `process.env.JAWSDB_URL` lets you plug in your connection details with just a single phrase. When you set up the `JawsDB` Provision, Heroku saved the connection info in an environment variable, which your `config.json` file references with the `"JAWSDB_URL"` string. Your deployed application will connect to the `production` database (JawsDB), while your local application will connect to the `development`.

3. After adding the code above and pushing those changes to your GitHub repository's `main` branch, deploy your application to Heroku: `git push heroku main`.

4. Once you deploy your application, type in `heroku open --app YOURAPPNAME` to open your application in your browser.


## Step 6. Test Aplication
  :feet:
  ***



```
npm i
npm server.js
```
 Open the browser and write
 ```
http://localhost:8080/
 ```
![demo](https://rocky-refuge-93631.herokuapp.com/)
 ***

![repository](https://github.com/pegasus-1982/Project2-Chores)
 ***
 Verify in Mysql Workbench
![demo](https://github.com/rakeru2006/nodejs-express-sequelize-mysql/blob/main/test4.png)
