"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Contrato extends sequelize_1.Model {
        static associate(models) {
            Contrato.belongsTo(models.Cliente, {
                foreignKey: "IdCliente",
                as: "Cliente"
            });
            Contrato.belongsTo(models.Paquete, {
                foreignKey: "IdPaquete",
                as: "Paquete"
            });
        }
    }
    Contrato.init({
        IdContrato: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Fecha: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Contrato'
    });
    return Contrato;
};
