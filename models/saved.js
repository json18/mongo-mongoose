// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Articles" model that matches up with DB
var Articles = sequelize.define("article", {
  title: {
    type: Sequelize.STRING
  },
  link: {
    type: Sequelize.STRING
  },
  summary: {
    type: Sequelize.STRING
  },
  saved: {
    type: Sequelize.BOOLEAN
  }
}, {
  timestamps: false
});

// Syncs with DB
Saved.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Saved;
