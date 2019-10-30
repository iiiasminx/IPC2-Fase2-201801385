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
class SeccionController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cursos = yield database_1.default.query('SELECT * FROM tseccion');
            res.json(cursos[0]);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log('mi id es:', id);
            const resultado = yield database_1.default.query('SELECT * from tseccion WHERE id_seccion = ?', [id]);
            if (resultado[0].length < 1) {
                res.json({ text: 'La sección que busca no existe :C' });
            }
            res.json(resultado[0]);
        });
    }
    getSinAuxiliar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const cursos = await pool.query('select * from tseccion where id_auxiliar IS NULL;');
            const cursos = yield database_1.default.query('select tseccion.sec_nombre, tseccion.sec_horario, tseccion.id_seccion, tcurso.cur_nombre from tseccion, tcurso where tseccion.id_auxiliar IS NULL and tseccion.id_curso = tcurso.id_curso group by tseccion.id_seccion;');
            res.json(cursos[0]);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO tseccion set?', [req.body]);
            res.json({ text: 'seccion creada' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log('mi id es:', id);
            yield database_1.default.query('DELETE FROM tseccion WHERE id_seccion =?', [id]);
            res.json({ text: 'seccion eliminada' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log('mi id es:', id);
            yield database_1.default.query('UPDATE tseccion set? WHERE id_seccion =?', [req.body, id]);
            res.json({ text: 'seccion actualizada' });
        });
    }
    setearAuxiliar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const {id} = req.params.id;
            const { carnet } = req.params;
            //console.log('mi id es:', id);
            yield database_1.default.query('UPDATE tseccion set id_auxiliar = ' + req.params.id_estudiante + ' WHERE id_seccion = ' + req.params.id + ';');
            //res.json({text: 'mi id es: ' + req.params.id + ' ' + req.params.id_estudiante});
            res.json({ text: 'seccion actualizada' });
        });
    }
}
const seccionController = new SeccionController();
exports.default = seccionController;
