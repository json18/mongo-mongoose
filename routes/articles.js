// Requiring our models
var db = require("../models");


module.exports = function(app) {

  //GET route for browsing all of the scraped articles
  app.get("/", function(req, res) {
    db.Article.findAll({}).then(function(dbArticle) {
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

  // app.get("/", function(req, res) {
  //   res.render("home", results);
  // });
  
  // app.get("/scraped/clear", function(req, res) {
  //   res.render("clear", results);
  // });
  
  // app.get("/scraped/new", function(req, res) {
  //   res.render("new", results);
  // });

};


