import {Request, Response} from 'express';
import pool from '../database';

class EstudianteController{

    public async list (req: Request, res: Response) {
        const auxiliares = await pool.query('SELECT * FROM testudiante');
        res.json(auxiliares[0]);
    }

    public async getOne(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        const resultado = await pool.query('SELECT * from testudiante WHERE id_estudiante = ?', [id]); 
        if(resultado[0].length < 1){
            res.json({text: 'El estudiante que busca no existe :C'});
        }
        res.json(resultado[0]); 
    }

    public async create(req: Request, res: Response){
        console.log(req.body);
        await pool.query('INSERT INTO testudiante set?', [req.body]);
        res.json({text: 'estudiante creado'});
    }

    public async delete(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        await pool.query('DELETE FROM testudiante WHERE id_estudiante =?', [id]);
        res.json({text: 'estudiante eliminado'});
    }

    public async update(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        await pool.query('UPDATE testudiante set? WHERE id_estudiante =?', [req.body, id]);
        res.json({text: 'estudiante actualizado'});
    }
}  

const estudianteController = new EstudianteController();
export default estudianteController;