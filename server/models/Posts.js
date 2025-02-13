const { Sequelize, DataTypes } = require("sequelize");

// Tworzymy funkcje ktora utworzy tablice w naszej bazie danych
module.exports = (Sequelize, DataTypes) => {
    const Posts = Sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: true
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return Posts;
};