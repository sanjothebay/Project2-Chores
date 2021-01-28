// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html

  app.get("/", function(req, res) {
    res.render("home")
  })
  
  app.get("/input", function(req, res) {
    res.render("inputForm")
  })

  
  app.get("/summary", function(req, res) {
    db.Chores.findAll().then(function (data){
     //  console.log(data);
      res.render("index", {
        chores: data,
        users: data,
      });

    })
    

  })
  
  // app.get("/summary", function(req, res) {
  //   db.Users.findAll().then(function (data){
  //      console.log(data);
  //     res.render("index", {
  //       //users: data,
  //       chores: data,
  //     })

  //   })

  // })
  
  

};
