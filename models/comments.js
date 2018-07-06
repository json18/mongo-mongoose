'use strict';
module.exports = (sequelize, DataTypes) => {
    var Comments = sequelize.define("Comments", {
        body: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    });

    Comments.associate = function (models) {
  
    };
    return Comments;
};

