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
class EstudianteController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const auxiliares = yield database_1.default.query('SELECT * FROM testudiante');
            res.json(auxiliares[0]);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log('mi id es:', id);
            const resultado = yield database_1.default.query('SELECT * from testudiante WHERE id_estudiante = ?', [id]);
            if (resultado[0].length < 1) {
                res.json({ text: 'El estudiante que busca no existe :C' });
            }
            res.json(resultado[0]);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO testudiante set?', [req.body]);
            res.json({ text: 'estudiante creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log('mi id es:', id);
            yield database_1.default.query('DELETE FROM testudiante WHERE id_estudiante =?', [id]);
            res.json({ text: 'estudiante eliminado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log('mi id es:', id);
            yield database_1.default.query('UPDATE testudiante set? WHERE id_estudiante =?', [req.body, id]);
            res.json({ text: 'estudiante actualizado' });
        });
    }
}
const estudianteController = new EstudianteController();
exports.default = estudianteController;
