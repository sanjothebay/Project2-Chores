// Requiring our models
var db = require("../models");

module.exports = function(app) {

  

  app.put("/api/complete", function(req, res) {
    db.Chores.update(
      req.body.completed,
      console.log(req.body.completed),
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbChores) {
      res.json(dbChores);
      console.log("it worked!")
    });
  });
    


  };
  