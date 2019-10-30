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
const database_1 = __importDefault(require("../database"));
class AsignacionController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const auxiliares = yield database_1.default.query('SELECT * FROM tasignacion');
            res.json(auxiliares[0]);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log('mi id es:', id);
            const resultado = yield database_1.default.query('SELECT * from tasignacion WHERE id_asignacion = ?', [id]);
            if (resultado[0].length < 1) {
                res.json({ text: 'El asignacion que busca no existe :C' });
            }
            res.json(resultado[0]);
        });
    }
    getPorEstudiante(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log('mi id es:', id);
            const resultado = yield database_1.default.query('select tseccion.sec_nombre, tseccion.id_seccion, tseccion.sec_horario, tasignacion.id_asignacion from tseccion,tasignacion where tasignacion.id_seccion=tseccion.id_seccion and tasignacion.id_estudiante = ' + id + ' group by tasignacion.id_asignacion;');
            res.json(resultado);
            if (resultado.length < 1) {
                res.json({ text: ' La asignacion que busca no existe' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO tasignacion set?', [req.body]);
            res.json({ text: 'asignacion creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log('mi id es:', id);
            yield database_1.default.query('DELETE FROM tasignacion WHERE id_asignacion =?', [id]);
            res.json({ text: 'asignacion eliminado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log('mi id es:', id);
            yield database_1.default.query('UPDATE tasignacion set? WHERE id_asignacion =?', [req.body, id]);
            res.json({ text: 'asignacion actualizado' });
        });
    }
}
const asignacionController = new AsignacionController();
exports.default = asignacionController;
