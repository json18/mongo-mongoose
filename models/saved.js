'use strict';
module.exports = (sequelize, DataTypes) => {
    var Saved = sequelize.define("Saved", {
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

    Saved.associate = function (models) {
  
    };
    return Saved;
};

