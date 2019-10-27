import {Request, Response} from 'express';
import pool from '../database';

class CursoController{

    public async list (req: Request, res: Response) {
        const cursos = await pool.query('SELECT * FROM tcurso');
        res.json(cursos[0]);
    }

    public async getOne(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        const resultado = await pool.query('SELECT * from tcurso WHERE id_curso = ?', [id]); 
        if(resultado[0].length < 1){
            res.json({text: 'El curso que busca no existe :C'});
        }
        res.json(resultado[0]); 
    }

    public async create(req: Request, res: Response){
        console.log(req.body);
        await pool.query('INSERT INTO tcurso set?', [req.body]);
        res.json({text: 'curso creado'});
    }

    public async delete(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        await pool.query('DELETE FROM tcurso WHERE id_curso =?', [id]);
        res.json({text: 'curso eliminado'});
    }

    public async update(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        await pool.query('UPDATE tcurso set? WHERE id_curso =?', [req.body, id]);
        res.json({text: 'curso actualizado'});
    }
    
}  

const cursoController = new CursoController();
export default cursoController;