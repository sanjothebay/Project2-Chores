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

  
  app.get('/summary', async function(req, res) {
    db.Users.findAll().then(function (dataUsers){
      db.Chores.findAll().then(function (dataChores){
         res.render("index", {
          users: dataUsers,
           chores: dataChores,
         })
         
     })
    })
    })
  
  // app.get("/summary", function(req, res) {
  //   db.Chores.findAll().then(function (data){
  //      console.log(data);
  //     res.render("index", {
  //       //users: data,
  //       chores: data,
  //     })

  //   })

  // })
  
  

};
