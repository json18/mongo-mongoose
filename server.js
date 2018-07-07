const cheerio = require("cheerio");
const request = require("request");
var express = require("express");
var bodyParser = require("body-parser");
var handlebars = require ("express-handlebars");


var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");
var articles = require("./routes/articles.js")(app);



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.engine("handlebars", handlebars({defaultLayout: "home"}))
app.set("view engine", "handlebars");

console.log("\n******************************************\n" +
            "Grabbing every article headline and link\n" +
            "from the NYT website:" +
            "\n******************************************\n");


request("https://www.nytimes.com/?auth=login-smartlock", function(error, response, html) {
    let $ = cheerio.load(html);
    let results = [];

    $("article").each(function(i, element) {   
        var title = $(element).children("h2").text();
        var link = $(element).children("h2.story-heading").children("a").attr("href");
        var summary = $(element).children("p").text("summary");
        results.push({
            title:title,
            link:link,
            summary:summary
        });

    });
    console.log("THIS IS RESULTS: ", results); 


    db.Article.update({
        //push results here. Might be create not update because nothing in databse yet.
    }).then(function(dbArticle) {
      res.json(dbArticle);
    });
        
    })
    
});


//require("./routes/articles.js")(app);



require("./routes/comments.js")(app);
require("./routes/saved.js")(app);

db.sequelize.sync({}).then(function () {
    app.listen(PORT, function () {
      console.log("App listening @ http://localhost:" + PORT);
    });
  });
  