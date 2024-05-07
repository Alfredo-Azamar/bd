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
class ClienteController extends AbstractController_1.default {
    // Método de clase
    static get instance() {
        if (!this._instance) {
            this._instance = new ClienteController("cliente");
        }
        return this._instance;
    }
    // Declarar todas las rutas del controlador
    initRoutes() {
        this.router.get('/test', this.getTest.bind(this)); //*
        this.router.get('/consultarClientes', this.getConsultarClientes.bind(this)); //*
        this.router.post('/crearCliente', this.postCrearCliente.bind(this)); //*
        this.router.delete('/eliminarCliente/:id', this.deleteBorrarCliente.bind(this)); //*
        this.router.get('/consultarContrato', this.getConsultarContrato.bind(this)); //*
        this.router.post('/crearContrato', this.postCrearContrato.bind(this)); //*
        this.router.put('/actualizarContrato/:id', this.putActualizarContrato.bind(this)); //* NO IMPLEMENTADO EN APPS
        this.router.delete('/eliminarContrato/:id', this.deleteBorrarContrato.bind(this)); //*
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
    getConsultarClientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let clientes = yield models_1.default["Cliente"].findAll();
                res.status(200).json(clientes);
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Internal server error ' + err);
            }
        });
    }
    postCrearCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                yield models_1.default.Cliente.create(req.body); //Insert
                console.log("Cliente creado");
                res.status(200).send("<h1>Cliente creado</h1>");
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Internal server error' + err);
            }
        });
    }
    deleteBorrarCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield models_1.default.Cliente.destroy({ where: { IdCliente: id } });
                res.status(200).send("<h1>Cliente eliminado</h1>");
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Internal server error' + err);
            }
        });
    }
    getConsultarContrato(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let contratos = yield models_1.default["Contrato"].findAll();
                res.status(200).json(contratos);
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Internal server error ' + err);
            }
        });
    }
    postCrearContrato(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                yield models_1.default.Contrato.create(req.body); //Insert
                console.log("Contrato creado");
                res.status(200).send("<h1>Contrato creado</h1>");
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Internal server error' + err);
            }
        });
    }
    putActualizarContrato(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield models_1.default.Contrato.update(req.body, { where: { IdContrato: id } });
                res.status(200).send("<h1>Contrato actualizado</h1>");
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Internal server error' + err);
            }
        });
    }
    deleteBorrarContrato(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield models_1.default.Contrato.destroy({ where: { IdContrato: id } });
                res.status(200).send("<h1>Contrato eliminado</h1>");
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Internal server error' + err);
            }
        });
    }
}
exports.default = ClienteController;
