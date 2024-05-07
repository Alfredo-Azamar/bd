"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Empleado extends sequelize_1.Model {
        static associate(models) {
            Empleado.belongsTo(models.Rol, {
                foreignKey: "IdRol",
                as: "Rol",
            });
        }
    }
    Empleado.init({
        IdEmpleado: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ApellidoP: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ApellidoM: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Usuario: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Contra: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "Empleado",
    });
    return Empleado;
};
