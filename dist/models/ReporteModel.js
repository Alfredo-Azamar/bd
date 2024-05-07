"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Reporte extends sequelize_1.Model {
        static associate(models) {
            Reporte.belongsTo(models.Zona, {
                foreignKey: 'IdZona',
                as: 'Zona',
            });
            Reporte.belongsTo(models.TipoIncidencia, {
                foreignKey: 'IdIncidencia',
                as: 'TipoIncidencia',
            });
            Reporte.belongsTo(models.Prioridad, {
                foreignKey: 'IdPrioridad',
                as: 'Prioridad',
            });
        }
    }
    Reporte.init({
        IdReporte: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        FechaHora: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Reporte'
    });
    return Reporte;
};
