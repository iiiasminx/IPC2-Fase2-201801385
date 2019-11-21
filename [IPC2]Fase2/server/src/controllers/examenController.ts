import {Request, Response} from 'express';
import pool from '../database';

class ExamenController{

    public async list (req: Request, res: Response) {
        const auxiliares = await pool.query('SELECT * FROM texamen');
        res.json(auxiliares[0]);
    }

    public async getOne(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        const resultado = await pool.query('SELECT * from texamen WHERE id_evaluacion = ?', [id]); 
        if(resultado[0].length < 1){
            res.json({text: 'El examen que busca no existe :C'});
        }
        res.json(resultado[0]); 
    }

    public async getPorNombre(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        const resultado = await pool.query('SELECT * from texamen WHERE ex_nombre = ?', [id]); 
        if(resultado[0].length < 1){
            res.json({text: 'El examen que busca no existe :C'});
        }
        res.json(resultado[0]); 
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

    public async create(req: Request, res: Response){
        console.log(req.body);
        await pool.query('INSERT INTO texamen set?', [req.body]);
        res.json({text: 'asignacion creado'});
    }

    public async delete(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        await pool.query('DELETE FROM texamen WHERE id_evaluacion =?', [id]);
        res.json({text: 'asignacion eliminado'});
    }

    public async update(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        await pool.query('UPDATE texamen set? WHERE id_evaluacion =?', [req.body, id]);
        res.json({text: 'asignacion actualizado'});
    }
}  

const examenController = new ExamenController();
export default examenController;