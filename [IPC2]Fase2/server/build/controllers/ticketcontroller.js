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
class TicketController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cursos = yield database_1.default.query('select tseccion.sec_nombre, tcurso.cur_nombre, tticket.id_seccion, tticket.tick_asunto, tticket.id_ticket, tticket.tick_contenido, tticket.tick_estado from tseccion, tcurso, tticket where tseccion.id_curso= tcurso.id_curso and tseccion.id_seccion = tticket.id_seccion group by tticket.id_ticket;');
            res.json(cursos[0]);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log('mi id es:', id);
            const resultado = yield database_1.default.query('SELECT * from tticket WHERE id_ticket = ?', [id]);
            if (resultado[0].length < 1) {
                res.json({ text: 'El ticket que busca no existe :C' });
            }
            res.json(resultado[0]);
        });
    }
    getNombreCursoYSeccion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cursos = yield database_1.default.query('select tseccion.sec_nombre, tcurso.cur_nombre, tticket.id_seccion, tticket.tick_asunto, tticket.tick_contenido, tticket.tick_estado from tseccion, tcurso, tticket where tseccion.id_curso= tcurso.id_curso and tseccion.id_seccion = tticket.id_seccion group by tticket.id_ticket;');
            res.json(cursos[0]);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO tticket set?', [req.body]);
            res.json({ text: 'ticket creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            console.log('mi id es:', id);
            yield database_1.default.query('DELETE FROM tticket WHERE id_ticket =?', [id]);
            res.json({ text: 'ticket eliminado' });
        });
    }
}
const ticketcontroller = new TicketController();
exports.default = ticketcontroller;
