const cheerio = require("cheerio");
const request = require("request");
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require ("express-handlebars");


let results = [
    { title: "", link: "", summary: "" },
];
  
var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");
//var articles = require("./routes/articles.js")(app);



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "home" }));
app.set("view engine", "handlebars");

console.log("\n******************************************\n" +
            "Grabbing every article headline and link\n" +
            "from the NYT website:" +
            "\n******************************************\n");


request("https://www.nytimes.com/?auth=login-smartlock", function(error, response, html) {
    let $ = cheerio.load(html);

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
   
    })
    

  app.get("/", function(req, res) {
    res.render("all-articles", results);
  });
  
  app.get("/scraped/clear", function(req, res) {
    res.render("clear", results);
  });
  
  app.get("/scraped/new", function(req, res) {
    res.render("new", results);
  });



require("./routes/articles.js")(app);
require("./routes/comments.js")(app);
require("./routes/saved.js")(app);

db.sequelize.sync({}).then(function () {
    app.listen(PORT, function () {
      console.log("App listening @ http://localhost:" + PORT);
    });
  });
  