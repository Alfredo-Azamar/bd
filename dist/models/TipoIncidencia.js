"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class TipoIncidencia extends sequelize_1.Model {
    }
    TipoIncidencia.init({
        IdTipoIncidencia: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'TipoIncidencia'
    });
    return TipoIncidencia;
};
