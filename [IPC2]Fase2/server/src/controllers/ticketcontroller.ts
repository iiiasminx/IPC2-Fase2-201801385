import {Request, Response} from 'express';
import pool from '../database';

class TicketController{

    public async list (req: Request, res: Response) {
        const cursos = await pool.query('select tseccion.sec_nombre, tcurso.cur_nombre, tticket.id_seccion, tticket.tick_asunto, tticket.tick_fecha, tticket.id_ticket, tticket.tick_contenido, tticket.tick_estado from tseccion, tcurso, tticket where tseccion.id_curso= tcurso.id_curso and tseccion.id_seccion = tticket.id_seccion group by tticket.id_ticket;');
        res.json(cursos[0]);
    }

    public async getOne(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        const resultado = await pool.query('SELECT * from tticket WHERE id_ticket = ?', [id]); 
        if(resultado[0].length < 1){
            res.json({text: 'El ticket que busca no existe :C'});
        }
        res.json(resultado[0]); 
    }

    public async getNombreCursoYSeccion (req: Request, res: Response) {
        const cursos = await pool.query('select tseccion.sec_nombre, tcurso.cur_nombre, tticket.id_seccion, tticket.tick_asunto, tticket.tick_contenido, tticket.tick_estado from tseccion, tcurso, tticket where tseccion.id_curso= tcurso.id_curso and tseccion.id_seccion = tticket.id_seccion group by tticket.id_ticket;');
        res.json(cursos[0]);
    }

       

    public async create(req: Request, res: Response){
        console.log(req.body);
        await pool.query('INSERT INTO tticket set?', [req.body]);
        res.json({text: 'ticket creado'});
    }

    public async delete(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        await pool.query('DELETE FROM tticket WHERE id_ticket =?', [id]);
        res.json({text: 'ticket eliminado'});
    }

    
}  

const ticketcontroller = new TicketController();
export default ticketcontroller;