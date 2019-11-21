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
class ExamenController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const auxiliares = yield database_1.default.query('SELECT * FROM texamen');
            res.json(auxiliares[0]);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log('mi id es:', id);
            const resultado = yield database_1.default.query('SELECT * from texamen WHERE id_evaluacion = ?', [id]);
            if (resultado[0].length < 1) {
                res.json({ text: 'El examen que busca no existe :C' });
            }
            res.json(resultado[0]);
        });
    }
    getPorNombre(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log('mi id es:', id);
            const resultado = yield database_1.default.query('SELECT * from texamen WHERE ex_nombre = ?', [id]);
            if (resultado[0].length < 1) {
                res.json({ text: 'El examen que busca no existe :C' });
            }
            res.json(resultado[0]);
        });
    }
    /*public async getPorEstudiante(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        const resultado = await pool.query('select tseccion.sec_nombre, tseccion.id_seccion, tseccion.sec_horario, tasignacion.id_asignacion from tseccion,tasignacion where tasignacion.id_seccion=tseccion.id_seccion and tasignacion.id_estudiante = '+ id +' group by tasignacion.id_asignacion;');
        res.json(resultado)
        if(resultado.length < 1){
            res.json({text: ' La asignacion que busca no existe'})
        }
    }

    public async getTodo(req: Request, res:Response){
        const resultado = await pool.query('SELECT tcurso.cur_nombre, tcurso.cur_semestre, tcurso.cur_year, tseccion.sec_nombre, tseccion.sec_horario, tseccion.id_curso, tasignacion.id_estudiante, testudiante.stud_nombre FROM tasignacion  LEFT JOIN tseccion    ON tasignacion.id_seccion = tseccion.id_seccion INNER JOIN tcurso ON tcurso.id_curso = tseccion.id_curso LEFT JOIN testudiante ON tasignacion.id_estudiante = testudiante.id_estudiante;');
        res.json(resultado)
        if(resultado.length < 1){
            res.json({text: ' La asignacion que busca no existe'})
        }
    }*/
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO texamen set?', [req.body]);
            res.json({ text: 'asignacion creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log('mi id es:', id);
            yield database_1.default.query('DELETE FROM texamen WHERE id_evaluacion =?', [id]);
            res.json({ text: 'asignacion eliminado' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log('mi id es:', id);
            yield database_1.default.query('UPDATE texamen set? WHERE id_evaluacion =?', [req.body, id]);
            res.json({ text: 'asignacion actualizado' });
        });
    }
}
const examenController = new ExamenController();
exports.default = examenController;
