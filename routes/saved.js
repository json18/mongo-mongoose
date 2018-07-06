var db = require("../models");

module.exports = function(app) {

  // GET route for getting all of the saved articles
  app.get("/saved", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Saved.findAll({}).then(function(dbSaved) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbSaved);
    });
  });

  // POST route for saving a new article
  app.post("/saved/new/:id", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Saved.create({
      title: req.body.text,
    }).then(function(dbSaved) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbSaved);
    });
  });

  // DELETE route for deleting saved articles. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/saved/delete/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Saved.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbSaved) {
      res.json(dbSaved);
    });

  });

};
