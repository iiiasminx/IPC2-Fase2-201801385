import {Request, Response} from 'express';
import pool from '../database';

class AsignacionAuxController{

    public async list (req: Request, res: Response) {
        const auxiliares = await pool.query('SELECT * FROM tasignacionaux');
        res.json(auxiliares[0]);
    }

    public async getOne(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        const resultado = await pool.query('SELECT * from tasignacionaux WHERE id_asignacion = ?', [id]); 
        if(resultado[0].length < 1){
            res.json({text: 'El asignacion que busca no existe :C'});
        }
        res.json(resultado[0]); 
    }

    public async getPorEstudiante(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        const resultado = await pool.query('select tseccion.sec_nombre, tseccion.id_seccion, tseccion.sec_horario, tasignacionaux.id_asignacion from tseccion,tasignacionaux where tasignacionaux.id_seccion=tseccion.id_seccion and tasignacionaux.id_auxiliar = '+ id +' group by tasignacionaux.id_asignacion;');
        res.json(resultado)
        if(resultado.length < 1){
            res.json({text: ' La asignacion que busca no existe'})
        }
    }

    public async getTodo(req: Request, res:Response){
        const resultado = await pool.query('SELECT tcurso.cur_nombre, tcurso.cur_semestre, tcurso.cur_year, tseccion.sec_nombre, tseccion.sec_horario, tseccion.id_curso, tasignacionaux.id_auxiliar, testudiante.stud_nombre FROM tasignacion  LEFT JOIN tseccion    ON tasignacionaux.id_seccion = tseccion.id_seccion INNER JOIN tcurso ON tcurso.id_curso = tseccion.id_curso LEFT JOIN testudiante ON tasignacion.id_estudiante = testudiante.id_estudiante;');
        res.json(resultado)
        if(resultado.length < 1){
            res.json({text: ' La asignacion que busca no existe'})
        }
    }

    public async create(req: Request, res: Response){
        console.log(req.body);
        await pool.query('INSERT INTO tasignacionaux set?', [req.body]);
        res.json({text: 'asignacion creado'});
    }

    public async delete(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        await pool.query('DELETE FROM tasignacionaux WHERE id_asignacion =?', [id]);
        res.json({text: 'asignacion eliminado'});
    }

    public async update(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        await pool.query('UPDATE tasignacionaux set? WHERE id_asignacion =?', [req.body, id]);
        res.json({text: 'asignacion actualizado'});
    }
}  

const asignacionAuxController = new AsignacionAuxController();
export default asignacionAuxController;