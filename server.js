const cheerio = require("cheerio");
const request = require("request");

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


