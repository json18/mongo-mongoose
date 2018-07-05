var path = require("path");

module.exports = function (app) {
    app.get("/", function (req,res) {
        res.sendFile(path.join(__dirname, "../public/blog.html"));
    });

    app.get("/saved", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/cms.html"));
      });



}

