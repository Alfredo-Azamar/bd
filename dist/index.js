"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = __importDefault(require("./provider/Server"));
const config_1 = require("./config"); // Si solo tiene el nombre de la carpeta, abre el index
const express_1 = __importDefault(require("express"));
const EmpleadoController_1 = __importDefault(require("./controllers/EmpleadoController"));
const ClienteController_1 = __importDefault(require("./controllers/ClienteController"));
const LlamadaController_1 = __importDefault(require("./controllers/LlamadaController"));
const ReporteController_1 = __importDefault(require("./controllers/ReporteController"));
const server = new Server_1.default({
    port: config_1.PORT,
    env: config_1.NODE_ENV,
    middlewares: [
        express_1.default.json(),
        express_1.default.urlencoded({ extended: true })
    ],
    controllers: [
        EmpleadoController_1.default.instance,
        ClienteController_1.default.instance,
        LlamadaController_1.default.instance,
        ReporteController_1.default.instance
    ]
});
server.init();
