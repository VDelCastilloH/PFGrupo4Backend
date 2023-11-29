const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    //definir el modelo
    sequelize.define(
        "Rating",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            comment: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            score: {
                type: DataTypes.FLOAT,
                validate: {
                    min : 0,
                    max: 5
                },
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        { timestamps: true }
    );
};