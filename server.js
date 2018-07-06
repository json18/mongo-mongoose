const cheerio = require("cheerio");
const request = require("request");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

console.log("\n******************************************\n" +
            "Grabbing every article headline and link\n" +
            "from the NYT website:" +
            "\n******************************************\n");


request("https://www.nytimes.com/?auth=login-smartlock", function(error, response, html) {
    let $ = cheerio.load(html);
    let results = [];

    $("h2.story-heading").each(function(i, element) {   
        var title = $(element).text();
        var link = $(element).children("a").attr("href");
       // var summary = $(element).
        results.push({
            title:title,
            link:link
        });
    });
    console.log(results);
    
    
});


require("./routes/articles.js")(app);
require("./routes/comments.js")(app);
require("./routes/saved.js")(app);

db.sequelize.sync({}).then(function () {
    app.listen(PORT, function () {
      console.log("App listening @ http://localhost:" + PORT);
    });
  });
  