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
