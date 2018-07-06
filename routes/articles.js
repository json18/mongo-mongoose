// Requiring our models
var db = require("../models");


module.exports = function(app) {

  // GET route for browsing all of the scraped articles
  app.get("/scraped/browse", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Article.findAll({}).then(function(dbArticle) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbArticle);
    });
  });

  // DELETE route for deleting scraped articles. 
  app.delete("/scraped/clear", function(req, res) {
    db.Article.destroy({
    }).then(function(dbArticle) {
      res.json(dbArticle);
    });

  });

  // PUT route for scraping new articles. We can get the updated todo data from req.body
  app.put("/scraped/new", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Article.update({
    }).then(function(dbArticle) {
      res.json(dbArticle);
    });
  });

};
