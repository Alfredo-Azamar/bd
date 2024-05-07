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
class EmpleadoController extends AbstractController_1.default {
    //Método de clase
    static get instance() {
        if (!this._instance) {
            this._instance = new EmpleadoController("empleado");
        }
        return this._instance;
    }
    //Declarar todas las rutas del controlador
    initRoutes() {
        this.router.get('/test', this.getTest.bind(this)); //*
        this.router.get('/consultarEmpleados', this.getConsultarEmpleados.bind(this)); //*
        this.router.post('/crearEmpleado', this.postCrearEmpleado.bind(this)); //*
        this.router.delete('/eliminarEmpleado/:id', this.deleteBorrarEmpleado.bind(this)); //*
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
    getConsultarEmpleados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let empleados = yield models_1.default["Empleado"].findAll(); // Manda los datos de la tabla
                res.status(200).json(empleados);
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Internal server error' + err);
            }
        });
    }
    postCrearEmpleado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.body);
                yield models_1.default.Empleado.create(req.body); //Insert
                console.log("Empleado creado");
                res.status(200).send("<h1>Empleado creado</h1>");
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Internal server error' + err);
            }
        });
    }
    deleteBorrarEmpleado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield models_1.default.Empleado.destroy({ where: { IdEmpleado: id } });
                res.status(200).send("<h1>Empleado eliminado</h1>");
            }
            catch (err) {
                console.log(err);
                res.status(500).send('Internal server error' + err);
            }
        });
    }
}
exports.default = EmpleadoController;
