const { Sequelize, DataTypes } = require("sequelize");

// Tworzymy funkcje ktora utworzy tablice w naszej bazie danych
module.exports = (Sequelize, DataTypes) => {
    const Comments = Sequelize.define("Comments", {
        commentBody: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return Comments;
};