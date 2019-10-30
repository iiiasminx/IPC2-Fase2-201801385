import {Request, Response} from 'express';
import pool from '../database';

class AsignacionController{

    public async list (req: Request, res: Response) {
        const auxiliares = await pool.query('SELECT * FROM tasignacion');
        res.json(auxiliares[0]);
    }

    public async getOne(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        const resultado = await pool.query('SELECT * from tasignacion WHERE id_asignacion = ?', [id]); 
        if(resultado[0].length < 1){
            res.json({text: 'El asignacion que busca no existe :C'});
        }
        res.json(resultado[0]); 
    }

    public async getPorEstudiante(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        const resultado = await pool.query('select tseccion.sec_nombre, tseccion.id_seccion, tseccion.sec_horario, tasignacion.id_asignacion from tseccion,tasignacion where tasignacion.id_seccion=tseccion.id_seccion and tasignacion.id_estudiante = '+ id +' group by tasignacion.id_asignacion;');
        res.json(resultado)
        if(resultado.length < 1){
            res.json({text: ' La asignacion que busca no existe'})
        }
    }

    public async create(req: Request, res: Response){
        console.log(req.body);
        await pool.query('INSERT INTO tasignacion set?', [req.body]);
        res.json({text: 'asignacion creado'});
    }

    public async delete(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        await pool.query('DELETE FROM tasignacion WHERE id_asignacion =?', [id]);
        res.json({text: 'asignacion eliminado'});
    }

    public async update(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        await pool.query('UPDATE tasignacion set? WHERE id_asignacion =?', [req.body, id]);
        res.json({text: 'asignacion actualizado'});
    }
}  

const asignacionController = new AsignacionController();
export default asignacionController;