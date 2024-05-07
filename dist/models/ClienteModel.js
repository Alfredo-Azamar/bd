"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, type) => {
    class Cliente extends sequelize_1.Model {
        static associate(models) {
            Cliente.belongsTo(models.Zona, {
                foreignKey: "IdZona",
                as: "Zona",
            });
        }
    }
    Cliente.init({
        IdCliente: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        Nombre: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        ApellidoP: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        ApellidoM: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        FechaNac: {
            type: sequelize_1.DataTypes.DATEONLY,
            allowNull: false
        },
        Celular: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Cliente'
    });
    return Cliente;
};
