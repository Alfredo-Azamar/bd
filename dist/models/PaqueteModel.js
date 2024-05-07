"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Paquete extends sequelize_1.Model {
    }
    Paquete.init({
        IdPaquete: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Precio: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Paquete'
    });
    return Paquete;
};
