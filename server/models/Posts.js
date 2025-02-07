const { Sequelize, DataTypes } = require("sequelize");

// Tworzymy funkcje ktora utworzy tablice w naszej bazie danych
module.exports = (Sequelize, DataTypes) => {
    const Posts = Sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    return Posts;
};