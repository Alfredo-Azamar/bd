"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Llamada extends sequelize_1.Model {
        static associate(models) {
            Llamada.belongsTo(models.Empleado, {
                foreignKey: "IdEmpleado",
                as: "Empleado",
            });
            Llamada.belongsTo(models.Cliente, {
                foreignKey: "IdCliente",
                as: "Cliente",
            });
            Llamada.belongsTo(models.Estado, {
                foreignKey: "IdEstado",
                as: "Estado",
            });
            Llamada.belongsTo(models.Asunto, {
                foreignKey: "IdAsunto",
                as: "Asunto",
            });
        }
    }
    Llamada.init({
        IdLlamada: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        FechaHora: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        Notas: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "Llamada",
    });
    return Llamada;
};
