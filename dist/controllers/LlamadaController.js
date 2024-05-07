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
class LlamadaController extends AbstractController_1.default {
    //Método de clase
    static get instance() {
        if (!this._instance) {
            this._instance = new LlamadaController("llamada");
        }
        return this._instance;
    }
    //Declarar todas las rutas del controlador
    initRoutes() {
        this.router.get('/test', this.getTest.bind(this)); //*
        this.router.get('/consultarLlamadas', this.getConsultarLlamadas.bind(this)); //*
        this.router.post('/crearLlamada', this.postCrearLlamada.bind(this)); //*
        this.router.delete('/eliminarLlamada/:id', this.deleteBorrarLlamada.bind(this)); //*
        this.router.get('/consultarAsunto', this.getConsultarAsunto.bind(this)); //*
        this.router.post('/crearAsunto', this.postCrearAsunto.bind(this)); //*
        this.router.put('/actualizarAsunto/:id', this.putActualizarAsunto.bind(this)); //* NO IMPLEMENTADO EN APPS
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
    getConsultarLlamadas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let llamadas = yield models_1.default["Llamada"].findAll();
                res.status(200).json(llamadas);
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Internal server error' + err);
            }
        });
    }
    postCrearLlamada(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                yield models_1.default.Llamada.create(req.body); //Insert
                console.log("Llamada creada");
                res.status(200).send("<h1>Llamada creada</h1>");
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Internal server error' + err);
            }
        });
    }
    deleteBorrarLlamada(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield models_1.default.Llamada.destroy({ where: { IdLlamada: id } });
                res.status(200).send("<h1>Llamada eliminada</h1>");
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Internal server error' + err);
            }
        });
    }
    getConsultarAsunto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let asuntos = yield models_1.default["Asunto"].findAll();
                res.status(200).json(asuntos);
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Internal server error' + err);
            }
        });
    }
    postCrearAsunto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                yield models_1.default.Asunto.create(req.body); //Insert
                console.log("Asunto creado");
                res.status(200).send("<h1>Asunto creado</h1>");
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Internal server error' + err);
            }
        });
    }
    putActualizarAsunto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield models_1.default.Asunto.update(req.body, { where: { IdAsunto: id } });
                res.status(200).send("<h1>Asunto actualizado</h1>");
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Internal server error' + err);
            }
        });
    }
}
exports.default = LlamadaController;
