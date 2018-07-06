'use strict';
module.exports = (sequelize, DataTypes) => {
    var Article = sequelize.define("Article", {
            title: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            link: {
              type: DataTypes.STRING,
              allowNull: false,
            },
            summary: {
              type: DataTypes.TEXT,
              allowNull: false,
            }
    });

    Article.associate = function (models) {
  
    };
    return Article;
};

