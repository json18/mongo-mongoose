var db = require("../models");

module.exports = function(app) {

  // GET route for getting all of the comments
  app.get("/comments/all", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Comments.findAll({}).then(function(dbComments) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbComments);
    });
  });

  // POST route for saving a new comment
  app.post("/comments/new", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Comments.create({
      title: req.body.text,

    }).then(function(dbComments) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbComments);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/comments/delete/:id", function(req, res) {
    // We just have to specify which todo we want to destroy with "where"
    db.Comments.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbComments) {
      res.json(dbComments);
    });

  });

  // PUT route for updating comments. We can get the updated comment data from req.body
  app.put("/comments/update/:id", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Comments.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });

};
