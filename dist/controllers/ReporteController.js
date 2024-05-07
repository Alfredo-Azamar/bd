"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractController_1 = __importDefault(require("./AbstractController"));
const models_1 = __importDefault(require("../models"));
class ReporteController extends AbstractController_1.default {
    //Método de clase
    static get instance() {
        if (!this._instance) {
            this._instance = new ReporteController("reporte");
        }
        return this._instance;
    }
    //Declarar todas las rutas del controlador
    initRoutes() {
        this.router.get('/test', this.getTest.bind(this)); //*
        this.router.get('/consultarReportes', this.getConsultarReportes.bind(this)); //*
        this.router.post('/crearReporte', this.postCrearReporte.bind(this)); //*
        this.router.delete('/eliminarReporte/:id', this.deleteBorrarReporte.bind(this)); //*
    }
    getTest(req, res) {
        try {
            console.log("Prueba exitosa");
            res.status(200).send("<h1>Prueba exitosa</h1>");
        }
        catch (error) {
            console.log(error);
            res.status(500).send('Internal server error' + error);
        }
    }
    getConsultarReportes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let reportes = yield models_1.default["Reporte"].findAll();
                res.status(200).json(reportes);
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Internal server error' + err);
            }
        });
    }
    postCrearReporte(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                yield models_1.default.Reporte.create(req.body); //Insert
                console.log("Reporte creado");
                res.status(200).send("<h1>Reporte creado</h1>");
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Internal server error' + err);
            }
        });
    }
    deleteBorrarReporte(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield models_1.default.Reporte.destroy({ where: { IdReporte: id } });
                console.log("Reporte eliminado");
                res.status(200).send("<h1>Reporte eliminado</h1>");
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Internal server error' + err);
            }
        });
    }
}
exports.default = ReporteController;
