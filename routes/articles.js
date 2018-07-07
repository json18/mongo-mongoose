// Requiring our models
var db = require("../models");


module.exports = function(app) {

  //GET route for browsing all of the scraped articles
  app.get("/", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Article.findAll({}).then(function(dbArticle) {
      // We have access to the todos as an argument inside of the callback function
      res.json("String Testing");
    });
  });

  // DELETE route for deleting scraped articles. 
  app.delete("/scraped/clear", function(req, res) {
    db.Article.destroy({
    }).then(function(dbArticle) {
      res.json(dbArticle);
    });

  });

  // PUT route for scraping new articles. 
  app.put("/scraped/new", function(req, res) {
    db.Article.update({
    }).then(function(dbArticle) {
      res.json(dbArticle);
    });
  });


};
